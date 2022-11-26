#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
cp $GITHUB_WORKSPACE/.github/scripts/my-release-key.keystore $GITHUB_WORKSPACE/android/app/my-release-key.keystore 
