// Name: Bhoomika Patel
// Student Number: 100730738
// Date Completed: 06 March 2020 




class Contact
{
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

class Register
{
    constructor(firstName = "", lastName = "", emailAddress = "", password = "", confirmPassword = "")
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}



"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();
    let registerObject = new Register();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

       let pageName = name.substring(1, name.length - 5);

       switch(pageName)
        {
            case "index":
               DisplayHomePageContent();
                break;
            case "products":
                DisplayProductsContent();
                break;
            case "services":
                DisplayServicesContent();
                break;
            case "about":
                DisplayAboutContent();
                break;
            case "contact":
                DisplayContactContent();
                break;
            case "projects":
                DisplayProjectsContent();
                break;
            case "login":
                DisplayLoginContent();
                break;
            case "register":
                DisplayRegisterContent();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";
        /* $("button").click(()=>{
            location.href = "projects.html";
        }); */

        document.title = "WEBD6201 - Home";

        let progressbar = $( "#progressBar" ).progressbar({
            value: 37
          });

        console.log(progressbar);

        $("#projectsButton").click(function(){
            $(this).fadeOut(3000, "linear", ()=>{
                $(this).fadeIn(1000, "linear", ()=>{
                    location.href = "projects.html";
                });
            });
        });
    }

    function DisplayProductsContent()
    {
        document.title = "WEBD6201 - Products";
    }

    function DisplayServicesContent()
    {
        document.title = "WEBD6201 - Services";
    }

    function DisplayAboutContent()
    {
        document.title = "WEBD6201 - About Us";
    }

    function DisplayContactContent()
    {
        document.title = "WEBD6201 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {
        document.title = "WEBD6201 - Projects";
    }

    function DisplayLoginContent()
    {
        document.title = "WEBD6201 - Login";

        $("#loginForm").submit  ((e)=>
        {
           
            e.preventDefault();
            e.stopPropagation();
            $("#loginForm")[0].reset();
            $("#login").hide();
            $("#logout").show();

        });

    }

    function DisplayRegisterContent()
    {
        document.title = "WEBD6201 - Register";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#registerForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#firstName").select();

        // First Name Events
        $("#firstName").blur((e)=>
        {
            if( $("#firstName").val().length < 2)
            {
                $("#errorMessage").show();
                $("#errorMessage").text("First Name is Too Short");
                $("#firstName").select();
                $("#firstName").css("border", "1px solid red");

            }
            else
            {
                $("#errorMessage").hide();
                $("#firstName").css("border", "1px solid #ced4da");

            }

        });

        // Last Name Events
        $("#lastName").blur((e)=>
        {
            if( $("#lastName").val().length < 2)
            {
                $("#errorMessage").show();
                $("#errorMessage").text("last Name is Too Short");
                $("#lastName").select();
                $("#lastName").css("border", "1px solid red");

            }
            else
            {
                $("#errorMessage").hide();
                $("#lastName").css("border", "1px solid #ced4da");

            }

        });

                // Email address Events
                $("#emailAddress").blur((e)=>
                {
                    if( ($("#emailAddress").val().length < 8) || ( !$("#emailAddress").val().includes("@")))
                    {
                        $("#errorMessage").show();
                        $("#errorMessage").text("Invalid Email Address!");
                        $("#emailAddress").select();
                        $("#emailAddress").css("border", "1px solid red");
        
                    }
                    else
                    {
                        $("#errorMessage").hide();
                        $("#emailAddress").css("border", "1px solid #ced4da");
        
                    }
        
                });
                // password Events
                $("#password").blur((e)=>
                {
                    if( $("#password").val().length < 6)
                    {
                        $("#errorMessage").show();
                        $("#errorMessage").text("Length of Password is too Short!");
                        $("#password").select();
                        $("#password").css("border", "1px solid red");
        
                    }
                    else
                    {
                        $("#errorMessage").hide();
                        $("#password").css("border", "1px solid #ced4da");
        
                    }
                });    

                 // confirm password Events
                 $("#confirmPassword").blur((e)=>
                 {
                     if( $("#confirmPassword").val().length < 6)
                     {
                         $("#errorMessage").show();
                         $("#errorMessage").text("Length of Password is too Short!");
                         $("#passwconfirmPasswordord").select();
                         $("#confirmPassword").css("border", "1px solid red");
         
                     }
                     else
                     {
                         $("#errorMessage").hide();
                         $("#confirmPassword").css("border", "1px solid #ced4da");
         
                     }
                 });    





        $("#registerForm").submit  ((e)=>
        {
            if(document.getElementById("registerForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }
            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let emailAddress = $("#emailAddress").val();
            let password = $("#password").val();
            let confirmPassword= $("#confirmPassword").val();

            console.log(`First Name: ${firstName}`);
            console.log(`Last Name: ${lastName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Password: ${password}`);
            console.log(`Password: ${confirmPassword}`);
            
            registerObject.firstName = firstName;
            registerObject.lastName = lastName;
            registerObject.emailAddress = emailAddress;
            registerObject.password = password;
           registerObject.emailAddress = confirmPassword;
            console.log(registerObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    

    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

