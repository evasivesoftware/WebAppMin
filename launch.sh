#!/bin/bash
clear
sass --watch -t compressed assets/scss:assets/css &> /dev/null &
grunt
grunt watch