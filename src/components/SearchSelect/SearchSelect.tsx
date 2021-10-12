import { Link, ListItemText, MenuItem, MenuList, OutlinedInput } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ChangeEvent, createRef, useEffect, useState } from 'react';
import PortionButton from '../PortionButton';
import { CancelRounded } from '@material-ui/icons';
import { OptionsType } from 'react-select';
import { unstable_batchedUpdates } from 'react-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            width: 'fit-content',
            margin: '0 auto',
            paddingLeft: 8,
            paddingRight: 8,
            boxSizing: 'border-box',
            '&:focus': {
                background: 'black',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                '& button': {
                    width: '100%',
                },
            },
        },
        menuWrapper: {
            borderRadius: 8,
            paddingTop: 16,
            paddingBottom: 16,
            minWidth: 400,
            position: 'absolute',
            top: 50,
            left: 0,
            border: '1px solid ' + theme.palette.secondary.main,
            background: theme.palette.common.white,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            opacity: 0,
            transition: 'all 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            visibility: 'hidden',
            overflow: 'hidden',
            zIndex: 1,
            '& .MuiListItem-gutters': {
                paddingLeft: 0,
                paddingRight: 0,
            },
            '& .MuiListItem-button': {
                paddingLeft: 16,
                paddingRight: 16,
            },
            '& .MuiListItem-button:hover': {
                backgroundColor: '#E6F0F5',
                '& .MuiTypography-body1': {
                    color: theme.palette.primary.main,
                },
            },
            '& .MuiList-padding': {
                padding: 0,
                overflowY: 'scroll',
                maxHeight: 400,
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            },
            '&.active': {
                opacity: 1,
                visibility: 'visible'
            },
            '&.right': {
                right: 0,
                left: 'unset',
                '& .MuiListItem-button': {
                    textAlign: 'right',
                },
            },
            '&.center': {
                left: 'calc(50% - 200px)',
                right: 'unset',
                '& .MuiListItem-button': {
                    textAlign: 'center',
                },
            },
            [theme.breakpoints.down('xs')]: {
                // minWidth: 'unset',
                // width: 'calc(94vw - 16px)',
                // '&.center': {
                //     left: 'calc(50% - 47vw + 8px)',
                // },
                // '& .MuiList-padding': {
                //     maxHeight: 'calc(100vh - 50px)',
                // },
                position: 'relative',
                top: 'unset',
                left: 'unset',
                right: 'unset',
                width: '100%',
                minWidth: 'unset',
                height: 'fit-content',
                maxHeight: 0,
                boxSizing: 'border-box',
                padding: 0,
                '&.active': {
                    maxHeight: 300,
                    paddingTop: 16,
                    paddingBottom: 16,
                    marginTop: 16,
                    marginBottom: 16
                },
                '&.center': {
                    left: 0,
                },
            },
        },
        input: {
            width: '100%',
            marginBottom: -8,
            '& input': {
                padding: '15.5px 14px',
            },
            '&.default .MuiOutlinedInput-notchedOutline': {
                borderColor: '#828282',
            },
            '&.default.Mui-focused .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 1px 2px rgba(47, 128, 237, 0.25), 0px 2px 4px #CCE2FF',
                border: '1px solid #2F80ED',
            },
            '&.warn .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 1px 2px rgba(47, 128, 237, 0.25), 0px 2px 4px #FAD4D4',
                border: '1px solid #EB5757',
            },
            '&.active .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 1px 2px rgba(47, 128, 237, 0.25), 0px 2px 4px #CCE2FF',
                border: '1px solid #2F80ED',
            },
        },
        inputWrapper: {
            paddingRight: 16,
            paddingLeft: 16,
            position: 'relative',
        },
        groupHeader: {
            textTransform: 'uppercase',
            color: '#828282',
            fontSize: 14,
            lineHeight: '17px',
            '& .MuiListItemText-root': {
                margin: 0,
            },
        },
        group: {
            marginTop: 18,
            '&:first-child': {
                marginTop: 0,
            },
        },
        option: {
            '& .MuiListItemText-root': {
                margin: 0,
            },
            '& .MuiTypography-body1': {
                fontSize: 20,
                lineHeight: '24px',
                color: theme.palette.common.black,
            },
            '&.active': {
                backgroundColor: '#E6F0F5',
                '& .MuiTypography-body1': {
                    color: theme.palette.primary.main,
                },
            },
        },
        menuList: {
            marginTop: '24px',
        },
        cancelButton: {
            position: 'absolute',
            right: 24,
            top: 13,
        },
        selectedButton: {
            backgroundColor: 'rgb(230, 240, 245)'
        },
        noResult: {
            color: theme.palette.common.black,
            fontSize: 20,
            lineHeight: '30px',
            '& p': {
                margin: 0,
            },
            '&.Mui-disabled': {
                opacity: 1,
                marginBottom: -16,
            },
        },
    })
);

export interface GroupOptionType {
    label: string;
    options: Option[];
}

export interface Option {
    label: string;
    value: string;
    data?: any;
}

interface Props {
    className?: string;
    options: GroupOptionType[] | Option[];
    value?: string;
    label: string;
    groupMode?: boolean;
    searchMode?: boolean;
    popupPosition?: string;
    onChange?: (e: Option | null) => void;
}

export default function SearchSelect(props: Props) {
    const { className, popupPosition, options, label, searchMode, groupMode, value, onChange } = props;
    const classes = useStyles();
    const [selectedOptions, setSelectedOptions] = useState<any[]>(options);
    const [showGroupMode, setShowGroupMode] = useState(groupMode);
    const [noResult, setNoResult] = useState(false);
    const [status, setStatus] = useState('default');
    const [menuOpen, setMenuOpenState] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedValue, setSelectedValue] = useState(value ? value : '');
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [menuWrapper, setMenuWrapper] = useState<HTMLDivElement>();

    useEffect(() => {
        let _options: any[] = options;
        setSelectedOption(null);
        if (groupMode) {
            _options.forEach((group: GroupOptionType) => {
                group.options.forEach((option: Option) => {
                    if (option.value == selectedValue) {
                        setSelectedOption(option);
                        return false;
                    }
                });
            });
        } else {
            _options.forEach((option: Option) => {
                if (option.value == selectedValue) {
                    setSelectedOption(option);
                    return false;
                }
            });
        }
    }, [selectedValue]);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let chosenOptions: any[] = [];
        let newValue = e.target.value;

        setSearchInput(newValue);

        if (groupMode == true) {
            let _options: any[] = options;

            _options.forEach((group: GroupOptionType) => {
                group.options.forEach((option) => {
                    if (option.label.toUpperCase().includes(newValue.toUpperCase())) chosenOptions.push(option);
                });
            });
            if (newValue == '') {
                setSelectedOptions(options);
                setShowGroupMode(true);
                setNoResult(false);
                setStatus('default');
            } else {
                if (chosenOptions.length) {
                    setSelectedOptions(chosenOptions);
                    setShowGroupMode(false);
                    setNoResult(false);
                    setStatus('active');
                } else {
                    setSelectedOptions(options);
                    setShowGroupMode(true);
                    setNoResult(true);
                    setStatus('warn');
                }
            }
        } else {
            let _options: any[] = options;

            _options.forEach((option: Option) => {
                if (option.label.toUpperCase().includes(newValue.toUpperCase())) chosenOptions.push(option);
            });
            if (newValue == '') {
                setSelectedOptions(options);
                setNoResult(false);
                setStatus('default');
            } else {
                if (chosenOptions.length) {
                    setSelectedOptions(chosenOptions);
                    setNoResult(false);
                    setStatus('active');
                } else {
                    setSelectedOptions(options);
                    setNoResult(true);
                    setStatus('warn');
                }
            }
        }
    };

    const setMenuOpen = (flag: boolean) => {
        setMenuOpenState(flag);
        if (!flag) {
            menuWrapper?.removeEventListener('focusout', () => {});
        }
    };

    const handleSelect = (opt: Option) => {
        if (opt.value == selectedValue) {
            setSelectedValue('');
            if (onChange) onChange(null);
        } else {
            setSelectedValue(opt.value);
            if (onChange) onChange(opt);            
        }

        setMenuOpen(false);
        initState();
    };

    const initState = () => {
        setSearchInput('');
        setSelectedOptions(options);
        setShowGroupMode(groupMode);
        setNoResult(false);
        setStatus('default');
    };

    return (
        <div
            className={clsx(classes.root, className)}
            ref={(wrapper) => {
                if (wrapper && !menuWrapper) {
                    wrapper.addEventListener('focusout', (event) => {
                        let focusedTarget: any = event.relatedTarget;

                        if (focusedTarget) {
                            while (focusedTarget) {
                                if (focusedTarget == wrapper) {
                                    return;
                                }
                                focusedTarget = focusedTarget.parentElement;
                            }
                        }

                        setMenuOpen(false);
                        initState();
                    });
                    setMenuWrapper(wrapper);
                }
            }}
        >
            <PortionButton
                color='primary'
                outline={true}
                className={selectedOption ? classes.selectedButton : ''}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                    initState();
                }}
            >
                {selectedOption ? selectedOption.label : label}
            </PortionButton>
            <div className={clsx(classes.menuWrapper, menuOpen ? 'active' : '', popupPosition ? popupPosition : 'left')}>
                {searchMode ? (
                    <div className={classes.inputWrapper}>
                        <OutlinedInput id='select-menu' onChange={handleInputChange} value={searchInput} aria-describedby='outlined-weight-helper-text' className={clsx(classes.input, status)} />
                        {searchInput != '' ? (
                            <Link
                                href='#'
                                className={classes.cancelButton}
                                onClick={() => {
                                    setSearchInput('');
                                }}
                            >
                                <CancelRounded htmlColor='#2F80ED'></CancelRounded>
                            </Link>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
                <MenuList className={searchMode ? classes.menuList : ''}>
                    {noResult ? (
                        <MenuItem className={classes.noResult} disabled={true}>
                            <p>
                                <b>Sorry, we can’t find a match for you.</b>
                                <br />
                                Try a different search.
                            </p>{' '}
                        </MenuItem>
                    ) : (
                        ''
                    )}
                    {showGroupMode == true
                        ? selectedOptions.map((group: any, i: number) => (
                              <div key={i} className={classes.group}>
                                  <MenuItem className={classes.groupHeader} disabled={true}>
                                      <ListItemText>{group.label}</ListItemText>
                                  </MenuItem>
                                  {group.options.map((option: Option, j: number) => (
                                      <MenuItem className={clsx(classes.option, option.value == selectedValue ? 'active' : '')} key={j} onClick={() => handleSelect(option)}>
                                          <ListItemText>{option.label}</ListItemText>
                                      </MenuItem>
                                  ))}
                              </div>
                          ))
                        : selectedOptions.map((option: Option, i: number) => (
                              <MenuItem className={clsx(classes.option, option.value == selectedValue ? 'active' : '')} key={i} onClick={() => handleSelect(option)}>
                                  <ListItemText>{option.label}</ListItemText>
                              </MenuItem>
                          ))}
                </MenuList>
            </div>
        </div>
    );
}
