#!/bin/bash
clear
pkill sass
sass --watch -t compressed assets/scss:assets/css &> /dev/null &
grunt
grunt watch