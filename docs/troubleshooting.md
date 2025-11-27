# Troubleshooting Guide

This document covers common problems and their solutions.

## ❗ Weather search triggers while typing
**Cause:** Using onKeyDown incorrectly  
**Fix:** Only trigger search when Enter is pressed.


## ❗ Input clears before typing finishes
**Cause:** `setQuery('')` inside search handler  
**Fix:** Remove or comment out line.


## ❗ "Cannot read properties of undefined (reading 'filter')"
**Cause:** `forecast.list` was undefined  
**Fix:**

const daily = forecastResult.list
  ? forecastResult.list.filter(...)
  : [];

  
❗ "City not found" even for valid input

Cause: Misspelled or incorrect city
Fix: Ensure city is correctly spelt.