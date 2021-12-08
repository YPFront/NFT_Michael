import { Box, Typography, } from '@material-ui/core';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import clsx from 'clsx';
import backImg from 'src/assets/img/terms_back.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        background: 'rgb(249 236 224)',
        border: '1px solid #F2994A',
        borderRadius: '10px',
        overflow: 'hidden',
        
        ['@media (max-width: 768px)']: {
            marginTop: '120px',
            marginLeft: '25px',
            marginRight: '25px',
            fontSize: '18px',
        },
        ['@media (min-width: 768px)']: {
            marginTop: '132px',
            marginLeft: '148px',
            marginRight: '148px',
            fontSize: '20px',
        },
    },
    termsContainer: {
        zIndex: 10,
        ['@media (max-width: 768px)']: {
            paddingLeft: '15px',
            paddingRight: '21px',    
        },
        ['@media (min-width: 768px)']: {
            paddingLeft: '26px',
            paddingRight: '13px',    
        },
    },
    termsTitle:{
        ['@media (max-width: 768px)']: {
            marginTop: '25px',
            fontSize:'32px',
            fontWeight: 'bold',    
        },
        ['@media (min-width: 768px)']: {
            marginTop: '32px',
            fontSize:'48px',
            fontWeight: 'bold',    
        },
    },
    termsContent:{
        ['@media (max-width: 768px)']: {
            marginTop: '25px',
            marginLeft: '27px',
            marginRight: '28px',
            marginBottom: '61px',
            fontSize: '18px',
            lineHeight: '21.6px',       
        },
        ['@media (min-width: 768px)']: {
            marginTop: '32px',
            marginLeft: '148px',
            marginRight: '148px',
            marginBottom: '121px',
            fontSize: '24px',
            lineHeight: '28.8px',
        },
    },
    termsContentParagraphTitle:{
        ['@media (max-width: 768px)']: {
            fontSize: '28px',
            fontWeight: 'bold', 
            lineHeight: '28px',  
        },
        ['@media (min-width: 768px)']: {
            fontSize: '32px',
            fontWeight: 'bold',    
        },
    },
    imageWrapper: {
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        height: 602,
    },
    termsBackImage:{
        position: 'absolute',
        top: 60,
        transform: 'translateX(calc(49vw - 50%))',
        minWidth: 1892,
        width: '100%',
    },
    termsContentParagraphIndent: {
      textIndent: '20px',  
    },
    tabletHidden: {
        ['@media (max-width: 1024px)']: {
            display: 'none',
        },
    },
    description: {
        ['@media (min-width: 992px) and (max-width: 1024px)']: {
            maxWidth: '50%',
        },
    },
}));

const TermsMain = (props: any) => {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img className={classes.termsBackImage}src={backImg} />
            </div>

            <div className={clsx(classes.root, classes.termsContainer)} id='Transaction'>
                <Box textAlign='left' mt={2} mb={2}>
                    <Typography><b>PLEASE NOTE:</b> Your use of and access to our services (defined below) are subject to the following terms; if you do not agree to ALL of the following, you may not use or access the services in any manner.</Typography>
                </Box>
            </div>
            <div className={classes.termsTitle}>
                <Box textAlign='center' position='relative'>
                    <Typography variant='h3'>Terms of Use</Typography>
                </Box>
            </div>
            <div className={classes.termsContent}>
                <Box textAlign='left' position='relative'>
                    <p>Effective date: October 10th, 2021</p>
                    <p>Welcome to Portion.io. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the “Services”). If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at hello@portion.io</p>
                    <p>These Terms of Use (the “Terms”) are a binding contract between you and Trancendus Technology, Inc. d/b/a Portion (“Portion,” “we” and “us”).  You must agree to and accept all of the Terms, or you don’t have the right to use the Services. Your using the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document, as well as those in the Privacy Policy and Copyright Dispute Policy. There are two different types of users of the Services: “Buyers” (those purchasing [art or collectibles (whether digital or physical) (“Art”)] through the Services), and “Sellers” (those supplying Art displayed on the Services). Additional terms and conditions apply to you depending on what type of user you are, as indicated throughout these Terms or otherwise through the Services.</p>
                    <p>Portion is an online marketplace. Portion is acting solely in the capacity of an intermediary that facilitates transactions between Buyers and Sellers. Portion is not and should not be construed as an artist, creator, manufacturer, gallery, retailer, supplier, distributor, reseller or sales agent.  Unless otherwise agreed to in writing, Portion does not manufacture, own, take title to, store, have possession of, inspect or sell any of the Art listed, marketed, offered or sold on or in connection with our Services (whether online or offline). We do not sell Art on behalf of any Seller. All contracts for sale and transactions that take place through the Services are directly between the Seller supplying the Art through the Services and the Buyer of said Art and we are not a party to any such contract. Your use of the Services in no way implies that you are employed by Portion, nor may it be construed as such. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venturer of Portion, and you do not have any authority of any kind to bind Portion in any respect whatsoever.</p>
                    <p><b>NOTICE: Please read these Terms carefully.</b> They cover important information about Services provided to you and any charges, taxes, and fees we bill you. <b>These Terms include information about future changes to these Terms, limitations of liability, a class action waiver, and resolution of disputes by arbitration instead of in court.</b></p>
                    <br/>

                    <p className={classes.termsContentParagraphTitle}>Will these Terms ever change?</p>
                    <p>We are constantly trying to improve our Services, so these Terms may need to change along with the Services. We reserve the right to change the Terms at any time, but if we do, we will bring it to your attention by placing a notice on the platform website, by sending you an email, and/or by some other means.</p>
                    <p>If you don’t agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the Services in any way after a change to the Terms is effective, that means you agree to all of the changes.</p>
                    <p>Except for changes by us as described here, no other amendment or modification of these Terms will be effective unless in writing and signed by both you and us.</p>
                    <br/>

                    <p className={classes.termsContentParagraphTitle}>What about my privacy?</p>
                    <p>Portion takes the privacy of its users very seriously. For the current Portion Privacy Policy, please click here.</p>
                    <p>The Children’s Online Privacy Protection Act (“COPPA”) requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under 13. We do not knowingly collect or solicit personally identifiable information from children under 13; if you are a child under 13, please do not attempt to register for the Services or send any personal information about yourself to us. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us at hello@portion.io.</p>
                    <br/>

                    <p className={classes.termsContentParagraphTitle}>What are the basics of using Portion?</p>
                    <p>You may be required to connect to Portion using a provided 3rd party Ethereum wallet. If desired you may select a user name (“Portion User ID”). You promise to provide us with accurate, complete, and updated registration information about yourself. You may not select as your Portion User ID a name that you don’t have the right to use, or another person’s name with the intent to impersonate that person. You may not transfer your account to anyone else without our prior written permission.</p>
                    <p>You represent and warrant that you are an individual of legal age to form a binding contract (or if not, you’ve received your parent’s or guardian’s permission to use the Services and gotten your parent or guardian to agree to these Terms on your behalf). If you’re agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” in these Terms, except for in this sentence, refer to that organization or entity).</p>
                    <p>You will only use the Services for your own internal, personal, and not on behalf of or for the benefit of any third party, and only in a manner that complies with all laws that apply to you. If your use of the Services is prohibited by applicable laws, then you aren’t authorized to use the Services. We can’t and won’t be responsible for your using the Services in a way that breaks the law.</p>
                    <p>You will not share your account or password with anyone, and you must protect the security of your account and your password. You’re responsible for any activity associated with your account.</p>
                    <p><b>Your use of the Services is subject to the following additional restrictions:</b></p>
                    <p>You represent, warrant, and agree that you will not contribute any Content or User Submission (each of those terms is defined below) or otherwise use the Services or interact with the Services in a manner that:</p>
                    <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.termsContentParagraphIndent}>Infringes or violates the intellectual property rights or any other rights of anyone else (including Portion);</span></p>
                    <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Violates any law or regulation, including, without limitation, any applicable export control laws;</p>
                    <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;</p>
                    <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeopardizes the security of your Portion account or anyone else’s (such as allowing someone else to log in to the Services as you);</p>
                    <p>e.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attempts, in any manner, to obtain the password, account, or other security information from any other user;</p>
                    <p>f.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Violates the security of any computer network, or cracks any passwords or security encryption codes;</p>
                    <p>g.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Runs Maillist, Listserv, any form of auto-responder or “spam” on the Services, or any processes that run or are activated while you are not logged into the Services, or that otherwise interfere with the proper working of the Services (including by placing an unreasonable load on the Services’ infrastructure);</p>
                    <p>h.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Crawls,” “scrapes,” or “spiders” any page, data, or portion of or relating to the Services or Content (through use of manual or automated means);</p>
                    <p>i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Copies or stores any significant portion of the Content;</p>
                    <p>j.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decompiles, reverse engineers, or otherwise attempts to obtain the source code or underlying ideas or information of or relating to the Services.</p>
                    <p>A violation of any of the foregoing is grounds for termination of your right to use or access the Services.</p>
                    <br/>

                    <p className={classes.termsContentParagraphTitle}>What are my rights in the Services?</p>
                    <p>The materials displayed or performed or made available on or through the Services, including, but not limited to, text, graphics, data, articles, photos, images, illustrations, User Submissions (defined below), and so forth (all of the foregoing, the “Content”) are protected by copyright and/or other intellectual property laws. You promise to abide by all copyright notices, trademark rules, information, and restrictions contained in any Content you access through the Services, and you won’t use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose any Content not owned by you, (i) without the prior consent of the owner of that Content or (ii) in a way that violates someone else’s (including Portion’s) rights.</p>
                    <p>You understand that Portion owns the Services. You won’t modify, publish, transmit, participate in the transfer or sale of, reproduce (except as expressly provided in this Section), create derivative works based on, or otherwise exploit any of the Services.</p>
                    <p>The Services may allow you to copy or download certain Content; please remember that just because this functionality exists, doesn’t mean that all the restrictions above don’t apply – they do!</p>
                    <br/>

                    <p className={classes.termsContentParagraphTitle}>Do I have to grant any licenses to Portion or to other users?</p>
                    <p>Anything you post, upload, share, store, or otherwise provide through the Services is your “User Submission.” Some User Submissions may be viewable by other users. In order to display your User Submissions on the Services, and to allow other users to enjoy them (where applicable), you grant us certain rights in those User Submissions. Please note that all of the following licenses are subject to our Privacy Policy to the extent they relate to User Submissions that are also your personally-identifiable information.</p>
                    <p>For all User Submissions, you hereby grant Portion a license to translate, modify (for technical purposes, for example making sure your content is viewable on an iPhone as well as a computer) and reproduce and otherwise act with respect to such User Submissions, in each case to enable us to operate the Services, as described in more detail below. This is a license only – your ownership in User Submissions is not affected.</p>
                    <p>If you share a User Submission publicly on the Services and/or in a manner that more than just you or certain specified users can view, or if you provide us (in a direct email or otherwise) with any feedback, suggestions, improvements, enhancements, and/or feature requests relating to the Services (each of the foregoing, a “Public User Submission”), then you grant Portion the licenses above, as well as a license to display, perform, and distribute your Public User Submission for the purpose of making that Public User Submission accessible to all Portion users and providing the Services necessary to do so, as well as all other rights necessary to use and exercise all rights in that Public User Submission in connection with the Services and/or otherwise in connection with Portion’s business. Also, you grant all other users of the Services a license to access that Public User Submission, and to use and exercise all rights in it, as permitted by the functionality of the Services.</p>
                    <p>You agree that the licenses you grant are royalty-free, perpetual, irrevocable, and worldwide, provided that when you delete your Portion account, we will stop displaying your User Submissions (other than Public User Submissions, which may remain fully available) to other users (if applicable), but you understand and agree that it may not be possible to completely delete that content from Portion’s records, and that your User Submissions may remain viewable elsewhere to the extent that they were copied or stored by other users.</p>
                </Box>
            </div>
        </div>
    );
};

export default TermsMain;
