// My data as JSON objects:

var bio = {
  "name" : "Chris Boon",
  "role" : "UX/UI Designer",
  "contacts" : {
    "mobile" : "646-327-4724",
    "email" : "cboon27@gmail.com",
    "github" : "ChrisBoon",
    "twitter" : "nope",
    "location" : "NYC"
  },
  "welcomeMessage" : "Hello, I guess...",
  "skills" : [
    "array",
    "of",
    "strings"
  ],
  "biopic" : "http://gravatar.com/avatar/3df0b05a374aa747d45136d8d22342ab?s=512",
  "display" : function(){

    var headingName = HTMLheaderName.replace('%data%', this.name),
        headingRole = HTMLheaderRole.replace('%data%', this.role),
        headingMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage),
        headingImg = HTMLbioPic.replace('%data%', this.biopic),
        headingSkills = '';

    //if skills exist
    if (bio.skills.length>0) {


      headingSkills = HTMLskillsStart;

      //for each skill, append to #skills with formatting
      bio.skills.forEach(function(entry) {
        headingSkills = headingSkills + HTMLskills.replace( '%data%' , entry );
      });

    }

    $('#header').prepend(headingName + headingRole);
    $('#header').append(headingImg);

    //personally I don't want to have the 'message' or 'skills at a glance' so I've commented out the code that adds them
    //I left the code in the comments so you could see it was intentional
    // $('#header').append(headingMessage + headingSkills);

    for ( var contact in this.contacts){
      if (this.contacts.hasOwnProperty(contact)) {

        var thisContact = HTMLcontactGeneric.replace( '%contact%' , contact ).replace( '%data%' , this.contacts[contact] );

        $('#topContacts, #footerContacts').append(thisContact);
      }
    }

  }
};

var education = {
  "schools" : [
    {
      "name" : "Falmouth University",
      "location" : "Falmouth, Cornwall, UK",
      "degree" : "BA (Hons) Graphic Design",
      "majors" : "I'm not American - UK courses dont generally have 'majors'.",
      "dates" : "2005-2007",
      "url" : "http://www.falmouth.ac.uk/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Learn the Command Line",
      "school" : "Codecademy",
      "date" : "2015",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "Learn AngularJS",
      "school" : "Codecademy",
      "date" : "2015",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "PHP",
      "school" : "Codecademy",
      "date" : "2013",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "Python",
      "school" : "Codecademy",
      "date" : "2013",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "Ruby",
      "school" : "Codecademy",
      "date" : "2013",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "jQuery",
      "school" : "Codecademy",
      "date" : "2012",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "HTML & CSS",
      "school" : "Codecademy",
      "date" : "2012",
      "url" : "https://www.codecademy.com"
    },
    {
      "title" : "Javascript",
      "school" : "Codecademy",
      "date" : "2012",
      "url" : "https://www.codecademy.com"
    }


  ],
  "display" : function(){
    var schoolList = this.schools,
        courseList = this.onlineCourses;

    for ( var school in schoolList){

      if (schoolList.hasOwnProperty(school)) {

        $('#education').append(HTMLschoolStart);

        var thisSchool = schoolList[school],
            thisName = HTMLschoolName.replace( '%data%' , thisSchool.name ),
            thisLocation = HTMLschoolLocation.replace( '%data%' , thisSchool.location),
            thisDegree = HTMLschoolDegree.replace( '%data%' , thisSchool.degree ),
            thisDate = HTMLschoolDates.replace( '%data%' , thisSchool.dates);

        $('.education-entry:last').append(thisName+ thisDegree + thisDate+ thisLocation );
      }
    }

    if (courseList.length > 0) {
      $('#education').append(HTMLonlineClasses);

        for ( var course in courseList){
          if (courseList.hasOwnProperty(course)) {

          $('#education').append(HTMLonlineClassesStart);

          var thisCourse = courseList[course],
              thisTitle = HTMLonlineTitle.replace( '%data%' , thisCourse.title ),
              thisSite = HTMLonlineSchool.replace( '%data%' , thisCourse.school),
              thisDates = HTMLonlineDates.replace( '%data%' , thisCourse.date ),
              thisURL = HTMLonlineURL.replace( /%data%/g, thisCourse.url);

          $('.classes-entry:last').append(thisTitle + thisSite + thisDates + thisURL);

        }
      }
    }
  }
};

var work = {
  "jobs": [
    {
     "employer" : "Oxford University Press",
     "title" : "UX / UI Designer",
     "location" : "New York, NY",
     "dates" : "2012 - Present",
     "description" : "In-house lead for UX and UI design for all new projects developed by the New York group. Heavily involved in product creation from original concept through to final execution. Worked on several award-winning educational products including websites, Online Learning Platforms, and heavily interactive iBooks."
    },
    {
     "employer" : "Oxford University Press",
     "title" : "Senior Digital Designer",
     "location" : "Oxford, UK",
     "dates" : "2011-2012",
     "description" : "Designed and coded front end for ambitious new online learning platform. Developed designs for dozens of interactive games."
    },
    {
     "employer" : "Oxford University Press",
     "title" : "Designer",
     "location" : "Oxford, UK",
     "dates" : "2007-2011",
     "description" : "Designed multiple award-winning, market-leading English Language Teaching books, including 3 years on Headway, the world's best-selling ELT coursebook. Also lead designer on Network, the best-selling course for the Italian Secondary school market - developed the book and was UI designer for the accompanying app."
    }
  ],
  "display" : function(){
    var workList = this.jobs;

    for ( var job in workList ){
      if (workList.hasOwnProperty(job)) {

        $('#workExperience').append(HTMLworkStart);

        var thisJob = workList[job],
            thisEmployer = HTMLworkEmployer.replace( '%data%' , thisJob.employer ),
            thisTitle = HTMLworkTitle.replace( '%data%' , thisJob.title ),
            thisDate = HTMLworkDates.replace( '%data%' , thisJob.dates),
            thisDesc = HTMLworkDescription.replace( '%data%' , thisJob.description);

        $('.work-entry:last').append(thisEmployer + thisTitle + thisDate + thisDesc);
      }
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Online Practice v1.3.0",
      "dates" : "2014",
      "description" : "add text here when sure what to include",
      "images" : [
        "http://www.ssonlinepractice.com/promos/img/course-specific/stars/card-img-activity.jpg",
        "http://www.ssonlinepractice.com/promos/img/course-specific/stars/card-img-dash.jpg"
      ]
    }
  ],
  "display" : function(){

    var projectList = this.projects;


    for ( var proj in projectList ){

      if (projectList.hasOwnProperty(proj)) {

        $('#projects').append(HTMLprojectStart);

        var thisProj = projectList[proj],
            projTitle = HTMLprojectTitle.replace( '%data%' , thisProj.title ),
            projDates = HTMLprojectDates.replace( '%data%' , thisProj.dates ),
            projDesc = HTMLprojectDescription.replace( '%data%' , thisProj.description),
            projImg = '';

        if (thisProj.images.length > 0) {
          thisProj.images.forEach(
            projImg = projImg + HTMLprojectImage.replace( '%data%' , img)
          );
        }

        $('.project-entry:last').append(projTitle + projDates + projDesc + projImg);
      }
    }
  }
};


var initResume = function(){
  //display the sections
  bio.display();
  projects.display();
  work.display();
  education.display();

  //enable the map
  $('#mapDiv').append(googleMap);

  //add the faux click tracking
  $(document).click(function(loc) {
    var x = loc.pageX,
        y = loc.pageY;

    logClicks(x,y);
  });
};

initResume();