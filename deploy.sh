#!/bin/bash

# Simple script to deploy to GitHub Pages

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    echo "Not in a git repository. Initialize one with 'git init'."
    exit 1
fi

# Get the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Push to the current branch
echo "Pushing to $current_branch..."
git push origin $current_branch

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "gh-pages branch exists. Updating..."
    git checkout gh-pages
    git merge $current_branch
    git push origin gh-pages
    git checkout $current_branch
else
    echo "Creating gh-pages branch..."
    git checkout -b gh-pages
    git push origin gh-pages
    git checkout $current_branch
fi

echo "Deployment complete! Your site should be available at:"
echo "https://$(git config --get remote.origin.url | sed 's/.*github.com[:\/]\(.*\)\.git/\1/' | sed 's/\/.*//'}.github.io/$(basename -s .git $(git config --get remote.origin.url) | sed 's/.*\///')"
