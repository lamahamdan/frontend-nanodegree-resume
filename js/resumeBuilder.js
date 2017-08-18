var bio = {
    name: "Lama AlHamdan",
    role: "Developer",
    contacts: {
        mobile: "0550004554",
        email: "Lama.a.hamdan@gmail.com",
        github: "lamahamdan",
        twitter: "lamahamdan",
        location: "Riyadh",
        welcomeMessage: "Interested in web development, Teaching and graphic design"
    },
    skills: ["Java", "HTML,CSS,JavaScript", "PHP", "SQL,MySql", "C#,ASP.Net"],
    biopic: "images/fry.jpg"
}

var work = {
    jobs: [{
            employer: "Tata Consultancy Services",
            title: "Developer",
            location: "Riyadh, Saudi Arabia",
            dates: "December 2016- present",
            description: "Spotfire developer"
        },
        {
            employer: "Princess Noura University",
            title: "Teacher Assistant",
            location: "Riyadh, Saudi Arabia",
            dates: "August 2015 - November 2016",
            description: "Teaching Web Programming course."
        },
        {
            employer: "Ministry of Higher Education",
            title: "Developer",
            location: "Riyadh, Saudi Arabia",
            dates: "June 2014 - August 2014",
            description: "Developing Safeer mobile application for Android and iOS."
        }
    ]
}



var projects = {
    projects: [{
            'title': 'Catchy',
            'dates': '2015',
            'description': 'It is an android application named (Catchy) that helps reporting the traffic condition'+
              'and detecting the congested roads and providing the reason behind the traffic' +
              ' in easy way with many other features that help and save the driver time.',
            'images': ['images/fryy.jpg', 'images/fryy.jpg']
        },
        {
            'title': 'Snake Game',
            'dates': '2015',
            'description': 'Build an online multiplayer game (client-server) that uses the concept of socket Programming.',
            'images': ['images/fryy.jpg']
        },
        {
            'title': 'Give a book! Get a book!',
            'dates': '2014',
            'description': 'Website and windows phone application that helps the students to exchange their books between each other in an easy way.',
            'images': ['images/fryy.jpg']
        }

    ]
}


var education = {
    schools: [{
            name: "King Saud University",
            location: "Riyadh, Saudi Arabia",
            degree: "Bachelor Degree",
            majors: ["Information Technology"],
            dates: "2011 - 2015",
            url: "string"
        },

        {
            name: "Al.Rowad High School",
            location: "Riyadh, Saudi Arabia",
            degree: "High School Degree",
            majors: [" Science Track"],
            dates: "2011",
            url: "string"
        }
    ],
    onlineCourses: [{
        title: "front-end Nanodegree",
        school: "Udacity",
        dates: "2017",
        url: "Udacity.com"
    }]
}



var rpname = HTMLheaderName.replace("%data%", bio.name);
var rprole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(rpname + rprole);

var rpmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$('#topContacts, #footerContacts').append(rpmobile);

var rpemail = HTMLemail.replace("%data%", bio.contacts.email);
$('#topContacts, #footerContacts').append(rpemail);

var rpgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$('#topContacts, #footerContacts').append(rpgithub);

var rptwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$('#topContacts, #footerContacts').append(rptwitter);

var rplocation = HTMLlocation.replace("%data%", bio.contacts.location);
$('#topContacts, #footerContacts').append(rplocation);

var rpwm = HTMLwelcomeMsg.replace("%data%", bio.contacts.welcomeMessage);
$('#header').append(rpwm);

var rpimg = HTMLbioPic.replace("%data%", bio.biopic);
$('#header').append(rpimg);


$('#header').append(HTMLskillsStart);
if (bio.skills.length > 0) {
    for (skills in bio.skills) {
        var rps = HTMLskills.replace("%data%", bio.skills[skills]);
        $('#header').append(rps);
    }
}



function displayWork() {

    for (job in work.jobs) {
        //  $('#workExperience').append(HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer));
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
        $('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

    }


}

displayWork();


projects.display = function() {


    for (project in projects.projects) {
        //  $('#workExperience').append(HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer));
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $('.project-entry:last').append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));

            }
        }

    }


}

education.display = function() {


    for (school in education.schools) {
        //  $('#workExperience').append(HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer));
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $('.education-entry:last').append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education.schools[school].location));

        if (education.schools[school].majors.length > 0) {
            for (major in education.schools[school].majors) {
                $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));

            }
        }

    }

    for (onlineCourses in education.onlineCourses) {
        //  $('#workExperience').append(HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer));
        $('.education-entry:last').append(HTMLonlineClasses);
        $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school));
        $('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates));
        $('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url));


    }


}

projects.display();
education.display();




$('#education').append(HTMLschoolStart);
