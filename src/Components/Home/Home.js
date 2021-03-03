import React from 'react';
import './Home.scss';
import github from "../../Assets/github.svg";
import email from "../../Assets/email.svg";
import resume from "../../Assets/file.svg";
import {ScrollToTopOnMount, SectionsContainer, Section, Slide} from 'react-fullpage';
import ReactTextTransition, { presets } from "react-text-transition";
import pic from "../../Assets/landing_pic.png";
import { Card, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const Home =()=>{
    var data = {
        "projects":
            [
                {
                    "index": 0,
                    "image" :  require("../../Assets/EVELogo.png"),
                    "title": "EVE",
                    "date":"Fall 2020 & Spring 2021 ",
                    "description": "Enterprise Virtual Exchange (EVE) is a comprehensive and user-friendly platform that delivers illuminating connections between entrepreneurs, business owners, and specialized resources providers."
                },
                {
                    "index": 1,
                    "image" : require("../../Assets/PPLogo.png"),
                    "title": "Perfect Plan",
                    "date":"Fall 2019",
                    "description": "The Perfect Plan application, built for Ball State students, allows the user to upload and browse through meal combinations that total up to the perfect meal swipe amount."
                }
            ]

    };
    let options = {
        sectionClassName:     'section',
        anchors:              ['home', 'portfolio', 'contact_me'],
        scrollBar:            false,
        navigation:           true,
        navigationTooltips:   ['Home', 'Portfolio', 'Contact Me'],
        slidesNavigation:     true,
        showActiveTooltip:    true,
        verticalAlign:        true,
        arrowNavigation:      true,
        scrollHorizontally:   true,
        hasHorizontalScroll:  true
    };

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const TEXTS = [
        "Hello!",
        "مرحبا!",
        "¡Hola!",
        "안녕하세요!"
    ];

    const goTo = (url) => {
        window.location.href = url;
    }



    return(

        <div class="background">

            <ScrollToTopOnMount />
            <SectionsContainer {...options}>
                <Section className="landing" data-anchor="Home">
                    <div className="landing left">
                        <ReactTextTransition
                            text={ TEXTS[index % TEXTS.length] }
                            className="greeting"
                            springConfig={ presets.wobbly }
                        />
                        <div className="text">
                            <h1>I am Mera Alfawares;</h1>
                            <h2 style={{display:"inline"}}>A </h2><h2 style={{fontStyle:"italic", display:"inline"}}>Software Developer </h2> <h2 style={{display:"inline"}}>  in the making.</h2>
                        </div>
                    </div>
                    <div className="landing right">
                        <img className="me" src={pic}/>
                    </div>
                </Section>
                <Section className="portfolio" data-anchor="Portfolio">
                    <h1>Portfolio</h1>
                    <div className="ui centered padded grid">
                        {data.projects.map(project=>(
                        <Card className="four column">
                            <Image src={project.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{project.title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{project.date}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {project.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='#2A2A63'>
                                        Learn More
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                        ))}
                    </div>
                </Section>
                <Section className="resume" data-anchor="Contact Me">
                    <h1>Contact Me</h1>
                    <div>
                        <div onClick={()=>goTo('https://drive.google.com/file/d/1myU9U8xxgwTp7-eVHLczYwtr3_LX07zp/view?usp=sharing')}><img src={resume}/></div>
                        <div onClick={()=>goTo('https://github.com/maalfawares')}><img src={github}/></div>
                        <div onClick={()=>goTo('mailto:maalfawares@bsu.edu?subject=Hello&body=Hello%20Mera')}><img src={email}/></div>



                    </div>

                </Section>
            </SectionsContainer>
        </div>




    )

}

export default Home;