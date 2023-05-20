#!/usr/bin/env bash
if [ "$(uname)" == "Darwin" ]; then
    echo $'* Detcted MAC OS environment\n'
    echo $'* -------------SECTION 1--------------- *'
    echo $'* Install Homebrew'
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    echo $'* Install Homebrew Successfully'
    echo $'* ------------------------------------- *\n'
    echo $'* -------------SECTION 2--------------- *'
    echo $'* Install docker'
    brew install docker docker-machine
    echo $'* Install Docker Successfully'
    echo $'* ------------------------------------- *'
    echo $'*           SHOW PACKAGE LIST           *'
    brew list
    echo $'* ------------------------------------- *\n\n'
    echo $'* GET DOCKER IMAGE FROM DOCKER HUB'
    docker pull calvintsangv1/github-pipeline-test:latest
    echo $'* Running DOCKER Conatiner'
    docker-compose up -d
    echo $'\n* ---- All Environment Setup Completed ---- *\n'
    echo $'can access server from browser'
    echo $'use link: localhost:8080/api'

elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo $'* Detcted Linux environment\n'
    echo $'* -------------SECTION 1--------------- *'
    echo $'* Install Homebrew'
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    echo $'* Install Homebrew Successfully'
    echo $'* ------------------------------------- *\n'
    echo $'* -------------SECTION 2--------------- *'
    echo $'* Install docker'
    brew install docker docker-machine
    echo $'* Install Docker Successfully'
    echo $'* ------------------------------------- *'
    echo $'*           SHOW PACKAGE LIST           *'
    brew list
    echo $'* ------------------------------------- *\n\n'
    echo $'* GET DOCKER IMAGE FROM DOCKER HUB'
    docker pull calvintsangv1/github-pipeline-test:latest
    echo $'* Running DOCKER Conatiner'
    docker-compose up -d
    echo $'\n* ---- All Environment Setup Completed ---- *\n'
    echo $'can access server from browser'
    echo $'use link: localhost:8080/api'
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    echo * Detcted Windows 32 bits
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    # Do something under 64 bits Windows NT platform
    echo * Detected Windows 64 bits
fi