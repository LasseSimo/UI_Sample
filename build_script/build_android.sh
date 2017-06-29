#!/bin/bash
now=$(date +"%H_%M_%d_%m_%Y")
version=StaticUI_${now}
cd ../android && ./gradlew assembleRelease
buildPath=$HOME/Desktop/Build_StaticUI
### Check if a directory does not exist ###
if [ ! -d ${buildPath} ]
then
    mkdir -p ${buildPath}
fi
cp app/build/outputs/apk/app-release.apk ${buildPath}
newFile=${buildPath}/${version}.apk
mv ${buildPath}/app-release.apk ${buildPath}/${version}.apk
echo ${newFile}
