#!/bin/bash
clear
whoami


# login
echo "log in y/n"
read LOGIN
clear
if [ $LOGIN = "y" ]
then  
    # defining a variable
    echo "What Tennant"
    # reading input
    read TENN
    dxp-next auth login --tenant=$TENN   

else
   echo "NO logged in" 
fi



# Deplyment
echo "Deploy all y/n"
read DEPLOY
clear
if [ $DEPLOY = "y" ]
then  


    for d in */ ; do
        echo "Deploy $d"
        dxp-next cmp deploy ./$d
    done

else
   echo "NO Deploy" 
fi