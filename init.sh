#!/bin/bash

#npm init -y
#npm install express

./enable.sh

git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git
git config --global user.name radekbrep
git config --global user.email radekbeneda@gmail.com

npm install

#to run 
#node server.js


# Make sure you are not clonning via https
# git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git

#end of exec


