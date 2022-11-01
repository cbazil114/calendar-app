# calendar-app

The objective of this repository is to create a function workday planner. With hours from 9 am to 5 pm, a user should be able to input their tasks and objectives into each time slot, while being able to identify the current time visually. 

Unlike previous assignment, you are required to incorporate APIs such as JQuery, moment.js, and Bootstrap to assist in building your code. 

No installation required. 

## User Story

```md
* **AS AN** employee with a busy schedule
* **I WANT** to add important events to a daily planner
* **SO THAT** I can manage my time effectively
```

## Acceptance Criteria

```md
* **GIVEN** I am using a daily planner to create a schedule
* **WHEN** I open the planner
* **THEN** the current day is displayed at the top of the calendar
* **WHEN** I scroll down
* **THEN** I am presented with timeblocks for standard business hours
* **WHEN** I view the timeblocks for that day
* **THEN** each timeblock is color coded to indicate whether it is in the past, present, or future
* **WHEN** I click into a timeblock
* **THEN** I can enter an event
* **WHEN** I click the save button for that timeblock
* **THEN** the text for that event is saved in local storage
* **WHEN** I refresh the page
* **THEN** the saved events persist