DATE = new Date();

function timeSince(date) {
    var prevTime = new Date(date);
    var thisTime = new Date();
    var diff = thisTime.getTime() - prevTime.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365) * 10) / 10;
}

var CONTENT = {
    heading: "Hello. <span class=\"nowrap\">I'm Adam.</span>",
    thumb: "img/adam.jpg",
    content: [
        {
            heading: "I design things.",
            content: [
                {
                    heading: "Mechanical Color",
                    subheading: "Design Consulting",
                    year: ["2008", "present"],
                    content: 'Design consulting for [power tools](#), [audio gear](#), [educational toys](#), a [robot](#), a [hibachi grill](#), a [cooler](#), [headphones](#), [faucets](#), [toilets](#), [flush valves](#), a [sci-fi movie vehicle](#), [coffee makers](#), a [panini maker](#), and a [lint roller](#). Created marketing product photography for [video game consoles](#), [drones](#), [golf clubs](#), [medical devices](#), and a [scrubber thingy](#).'
                    },
                {
                    heading: "Bose",
                    subheading: "Advanced Development Industrial Design",
                    year: ["2007", "2008"],
                    content: "Developed user stories and prototypes for radical new product ideas, and served as an internal consulting group supporting design efforts in home entertainment, noise reduction technology, automotive, and professional audio products. Emphasis on technology, performance, and ease of use."
                    },
                {
                    heading: "Black & Decker",
                    subheading: "Power Tools",
                    year: ["2005", "2007"],
                    content: "Designed [power tools](#) for mass market, especially the [VPX product line](#). Special emphasis on design for manufacturability, cost, and visual brand language development."
                    },
                {
                    heading: "HP",
                    subheading: "Laptops",
                    year: "2004",
                    content: "Designed a [thin client ecosystem](#) for the home."
                    }
                ]
            },
        {
            heading: "I teach other people to design things.",
            content: [
                {
                    heading: "The Foundry",
                    subheading: "Trainer",
                    year: ["2010", "2015"],
                    content: "Developed video training and travelled to design offices around the US training teams to use MODO for 3D modeling and visualization, mainly in the automotive and sporting goods design fields."
                    },
                {
                    heading: "Otis College of Art & Design",
                    subheading: "Adjunct Faculty",
                    year: ["2010", "2012"],
                    content: "Four semesters teaching beginner and intermediate level Digital Design classes for product design students, especially SOLIDWORKS and Rhino."
                    },
                {
                    heading: "Studio Arts",
                    subheading: "Instructor",
                    year: ["2010", "2012"],
                    content: "Classroom instructor for beginner and intermediate level MODO and Rhino courses for Hollywood VFX professionals."
                    },
                {
                    heading: "CG Tuts+",
                    subheading: "Contributor",
                    year: "2010",
                    content: "Contributed video tutorials for beginner and intermediate level MODO users."
                    },
                {
                    heading: "cadjunkie",
                    subheading: "Partner",
                    year: ["2012", "present"],
                    content: "Beginner, Intermediate, and Advanced level video courses for MODO, SOLIDWORKS, and Rhino."
                    }
                ]
            },
        {
            heading: "I design tools that help people design things.",
            content: [
                {
                    heading: "Mechanical Color",
                    subheading: "MODO Plugin Development",
                    year: ["2014", "present"],
                    content: "Developed a line of popular plugins for MODO, including plugins for dynamic [radial](#) and [multi-axis symmetry](#), [iterative saving](#) and revision management, live-updating [dimensions](#), simplified [matcap shaders](#), [image cropping](#), simplified [progressive rendering](#), and completely reworked [User Interface](#)."
                    },
                {
                    heading: "The Foundry",
                    subheading: "UX + UI design",
                    year: ["2013", "present"],
                    content: "Designed and implemented the MODO 801/901 \"Interactive Showcase\", giving new users clear and concise access to important information, inspirational materials, and tutorials. Worked internally with The Foundry to develop products and plugins for the design market."
                    },
                {
                    heading: "OnShape",
                    subheading: "UX + UI design",
                    year: "2014",
                    content: "Worked with OnShape to streamline and simplify their browser-based user interface."
                    }
                ]
            },
        {
            heading: "I write about designing things.",
            content: [
                {
                    heading: "SolidSmack",
                    subheading: "Partner",
                    year: ["2012", "present"],
                    content: "At SolidSmack we [write](#), [podcast](#), and [produce video content](#) about the design process. We're interested in how real people make real products in real life."
                    }, {
                    heading: "Freelance",
                    subheading: "Writing for Hire",
                    content: [
                        {
                            heading: "3DWorld Magazine",
                            subheading: "Contributor",
                            year: "2010",
                            content: "Six page [cover article](#) and accompanying six hour video [tutorial](#) for MODO."
                            },
                        {
                            heading: "Develop3D Magazine",
                            subheading: "Contributor",
                            year: "2013",
                            content: "Four page printed [review](#) for MODO 701."
                            },
                        {
                            heading: "Industry Analysis",
                            subheading: "Freelance",
                            year: ["2014", "present"],
                            content: "Writing and contributing to industry analysis for business to business marketing purposes."
                            }
                        ]
                    },

                ]
            },
        {
            heading: "Expertise",
            content: [
                {
                    heading: "Industrial Design",
                    subheading: "for manufactured products",
                    year: ["2005", "present"],
                    content: "Fluent in design for injection molding, machining, and additive manufacturing. Have designed dozens of molded parts in a variety of product categories. Strong sketching and visual communication skills."
                    },
                {
                    heading: "User Experience Design",
                    subheading: "for digital tools",
                    year: ["2012", "present"],
                    content: "Thousands of hours synthesizing information structures into human-readable form, wireframing user experiences, and designing user interfaces with a combination of Photoshop, After Effects, or HTML/CSS prototyping."
                    },
                {
                    heading: "Digital Design Tools",
                    subheading: "for design and visualization",
                    content: [
                        {
                            heading: "MODO",
                            year: ["2007", "present"],
                            content: "Modeling power-user; broad use knowledge for modeling, animation, rigging, and rendering; deep structural knowledge for custom development."
                            },
                        {
                            heading: "SOLIDWORKS",
                            year: ["2004", "present"],
                            content: "Modeling power-user; broad use knowledge for part design and complex surfacing."
                            },
                        {
                            heading: "Siemens NX",
                            year: ["2007", "2008"],
                            content: "Strong modeling and surfacing knowledge."
                            },
                        {
                            heading: "CATIA V5",
                            year: ["2005", "2007"],
                            content: "Strong modeling and surfacing knowledge."
                            },
                        {
                            heading: "Rhinoceros 3D",
                            year: ["2003", "2008"],
                            content: "Strong modeling and surfacing knowledge."
                            },
                        {
                            heading: "Adobe After Effects",
                            year: ["2013", "present"],
                            content: "Strong working knowledge of 3D and motion graphics animation."
                            },
                        {
                            heading: "Adobe CS",
                            year: ["1997", "present"],
                            content: "Photoshop, Illustrator, and InDesign power user. Broad and deep knowledge."
                            }
                        ]
                    },
                {
                    heading: "Web Development",
                    subheading: "for whatever I want",
                    content: "Proficient with Javascript, HTML5, CSS3, and PHP for web prototyping and front-end development. Thousands of hours of Wordpress theme and plugin development experience.",
                    year: ["2005", "present"]
                    },
                {
                    heading: "Scripting",
                    subheading: "for digital workflows",
                    content: "Working knowledge of Python, Javascript, and shell scripting for workflow automation, in addition to platform and tool-specific customization tools for MODO, SolidWorks, Photoshop, Rhino, OSX, Windows, and TI-85 calculators.",
                    year: ["1997", "present"]
                    }
                ]
            },
        {
            heading: "Education",
            content: [
                {
                    heading: "University of Oxford",
                    subheading: "Mst. History of Design, Distinction",
                    content: "Studied research methodologies for design history. Wrote about the concept of 'authorship' in the age of 3D-printed guns, the Machine Age in America from the seat of a Farmall tractor, collective memory of World War II as illustrated by The Flying Tigers, the confusion caused by the misuse of the word \"function,\" and, finally, the problematic term \"authenticity\" as viewed through a pair of cheap sunglasses.",
                    year: ["2012", "2014"]
                    },
                {
                    heading: "Columbus College of Art & Design",
                    subheading: "Bachelor of Fine Arts, Cum Laude",
                    content: "Studied core Industrial (product) Design curriculum, classical drawing/painting, printmaking, ceramics, glass blowing, welding, bronze casting, and Making Stuff Out Of Duck Tape.",
                    year: ["2001", "2005"]
                    }
                ]
            },
        {
            heading: "Life",
            content: "My wife is an Art Conservator specializing in archaeological and ethnographic objects. Our daughter is " + timeSince("January 3, 2014 00:00:00") + " years old. We love to travel, hike big mountains, read nerdy books, play board games, sing silly songs, and cook yummy food. Hobbies include carpentry, playing drums/guitar/mandolin, juggling swords (true story), and making weird faces in front of a mirror."
            },
        {
            heading: "Contact",
            content: "**Adam O'Hern**\n\n* LinkedIn: [adamohern](#)  \n* Twitter: [adam_ohern](#)  \n* Hangouts: [adam.ohern@gmail.com](#)  \n* Skype: [adamohern](#)  \n* email: [adam@mechanicalcolor.com](#)  \n* M: (310) 692-4380"
            },
        {
            content: "Accessed " + DATE.toDateString()
            }
        ]
};