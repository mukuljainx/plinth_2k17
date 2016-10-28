<?php
include 'connection.php';

$name="";
$email="";
$number="";
$query="";
if($_SERVER['REQUEST_METHOD']=='POST')
  {
   
if(isset($_POST['name'])==true && empty($_POST['name'])==false &&
  isset($_POST['email'])==true && empty($_POST['email'])==false &&
  isset($_POST['number'])==true && empty($_POST['number'])==false &&  
  isset($_POST['query'])==true && empty($_POST['query'])==false
  )
{
  
  $name=$_POST["name"];
  $email=$_POST["email"];
  $number=$_POST["number"];
  $query=$_POST["query"];
  
  /*$info= array($InputName,$email,$InputMob,$InputMessage);
  
  
   header('location:mailer.php?info='.serialize($info));

 echo "your query is recorded";
}

}*/

    $info= array($name,$email,$number,$query);
  
  
   header('location:mailer.php?info='.serialize($info));

 echo "your query is recorded";
}
 /* $info= array($email);
   header('location:mailer1.php?info='.serialize($info));
echo "your query is recorded";
*/
}
?>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us | Plinth'17</title>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://use.fontawesome.com/8720ae4a19.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel="stylesheet" href="css/foundation.css">
        <link rel="stylesheet" href="css/app.css">
        <link rel="stylesheet" href="css/common.css">
        <link rel="stylesheet" href="css/contact.css" />
    </head>
    <body>
        
        <nav>
            <div class="header-logo">
                <a href="#"><img src="media/logo.svg"/></a>
            </div>
            <button class="ham-btn"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></button>
                <div class="ham-wrapper">
                    <div class="ham-content text-center">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Competitions</a></li>
                            <li><a href="#">Workshops</a></li>
                            <li><a href="#">Lectures</a></li>
                            <li><a href="#">The LNMIIT MUN</a></li>
                            <li><a href="#">Hackathon</a></li>
                        </ul>
                    </div>    
                </div>
            <div class="navitem text-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Competitions</a></li>
                    <li><a href="#">Workshops</a></li>
                    <li><a href="#">Lectures</a></li>
                    <li><a href="#">The LNMIIT MUN</a></li>
                    <li><a href="#">Hackathon</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="content">
            <div class="row head">
                <div class="small-4 columns">
                    <a href="#"><i class="fa fa-long-arrow-left fa-2x" aria-hidden="true"></i></a>
                </div>
                <div class="small-8 columns text-left">
                    <h4>Get In Touch With Us !</h4>
                </div>
            </div>
            <div class="row desc">
                <div class="small-12 columns text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet mattis ex. Morbi pharetra, tellus quis luctus tincidunt, elit libero iaculis ex, ac euismod eros ligula eget ipsum. Cras consequat varius venenatis. Vivamus auctor lorem tristique mi eleifend, id imperdiet erat faucibus. Nunc semper, orci ut dignissim varius, mauris augue placerat leo, vel sagittis enim erat ac dui. </p>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="small-12 small-centered columns text">
                <form role="form" action="contactUs.php" method="post">
                    <div class="fields">
                        <input type="text" name="name" placeholder="Your Name">
                    </div>
                    <div class="fields">
                        <input type="text" name="email" placeholder="Email">
                    </div>
                    <div class="fields">
                        <input type="text" name="number" placeholder="Mobile Number">
                    </div>
                    <div class="fields">
                        <textarea name="query" rows="5" cols="50" placeholder="Your Query">
                        </textarea>
                    </div>
                    <input type="submit" name="submit"  value="Submit" class="button success">
                </form>
            </div>
        </div>
        
        <script src="js/vendor/jquery.js"></script>
        <script src="js/vendor/what-input.js"></script>
        <script src="js/vendor/foundation.js"></script>
        <script src="js/app.js"></script>
        <script src="js/hamburger.js"></script>
        
    </body>
</html>