#!/usr/bin/env bash

git checkout gh-pages && git merge main --no-edit

git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
