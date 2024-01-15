# JavaScript Display Current Date Exercise

**Exercise**: Write a JavaScript program to get the current date.

## Overview

This repository contains a simple JavaScript program that displays the current date in different formats. The program outputs the date in the following formats: `mm-dd-yyyy`, `mm/dd/yyyy`, `dd-mm-yyyy`, and `dd/mm/yyyy`.

1. Date Object: The code uses the Date object to obtain the current date.
2. String Manipulation: String() is employed to convert the month, day, and year to strings. This is particularly useful for ensuring consistent formatting.
3. padStart Method: The padStart method is applied to ensure that both the month and day always have two digits, padding with leading zeros if necessary.
4. Template Literals: Template literals (``) are used to construct the formatted date string in a concise and readable way.
5. DOM Manipulation: The program interacts with the Document Object Model (DOM) to select the output element (#output) and dynamically update its content.
