#!/bin/bash

echo "Starting build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful. Deploying..."
    npm run deploy
else
    echo "Build failed. Fix errors before deploying."
    exit 1
fi

echo "Deployment complete!"