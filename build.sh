#!/usr/bin/env bash

# Copy the dashboard data
cp -R dashboards public/data/dashboards

# Generate summary file
node generate.js
