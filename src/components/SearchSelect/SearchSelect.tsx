import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SetStateAction, useState } from 'react';
import Select, {components} from 'react-select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

export interface OptionType {
  value: string,
  label: string
}

export interface GroupOptionType {
  label: string,
  options: OptionType[]
}

interface Option {
  label: string;
  value: string;
  data: any;
}

interface Props {
  className?: string;
  options: GroupOptionType[];
  value?: string,
  onChange?: (e: any) => void
}

const handleHeaderClick = (id: string) => {
  const node = document.querySelector(`#${id}`)?.parentElement?.nextElementSibling;
  const classes = node?.classList;
  if (classes?.contains("collapsed")) {
    node?.classList.remove("collapsed");
  } else {
    node?.classList.add("collapsed");
  }
};

const CustomGroupHeading = (props: any) => {
  return (
    <div
      className="group-heading-wrapper"
      onClick={() => handleHeaderClick(props.id)}
    >
      <components.GroupHeading {...props} />
    </div>
  );
};

const OptionComponent = (props: any) => {
  const { data } = props;
  if (data.display === 'no result') {
    return (
      <div style={{padding: '10px'}}>
        <b> Sorry, we can’t find a match for you. </b>
        <p>Try a different search.</p>
      </div>
    );
  } else {
    return <components.Option {...props} />;
  }
};


export default function PortionButton(props: Props) {
  const { className, options, value, onChange } = props;
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState<any[]>(options);

  const handleInputChange = (newValue: string) => {
    let chosenOptions: any[] = [];
    options.forEach(group => {
      group.options.forEach(option => {
        if (option.label.toUpperCase().includes(newValue.toUpperCase())) chosenOptions.push(option)
      })
    })
    if (newValue == '') {
      setSelectedOptions(options)
    } else {
      if (chosenOptions.length) {
        setSelectedOptions(chosenOptions)
      } else {
        chosenOptions = options.slice(0);
        chosenOptions.unshift({
          label: 'no result',
          display: 'no result'
        })
        setSelectedOptions(chosenOptions)
      }
    }    
  }

  const filterOption = (option: Option, rawInput: string) => {
    return true
  }

  return (
    <div className={classes.root}>
      <Select
        options={selectedOptions}
        className={className}
        onInputChange={handleInputChange}
        filterOption={filterOption}
        isClearable
        components={{ GroupHeading: CustomGroupHeading, Option: OptionComponent }}
      />
    </div>
  );
}
