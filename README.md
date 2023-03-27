# ClearBlade Todo App Coding challenge

This is a simple React App using Material-UI, Typescript, Zustand for state management, @hello-pangea/dnd for drag and drop, and attempts to follow Bulletproof react.

to install:
`gh repo clone AdamJablonka/clearblade-coding-challenge`

`npm install`

`npm run start`

## Application features implemented

- View all todos
- Create new todos
- Update the status and title of todos that have already been created
- Delete todos
- Search for todos by title
- Filtering todos by status

Some of the advanced features include:

- Persist data in local storage to maintain it across refreshes
- User can drag and drop todos to reorder them
  - (drag and drop abilities of the todos have quite a lot of bugs, more in the issues section)

## Files overview

**All global states are located in the src/stores folder.**

- useSearchStore which stores data that keeps track of search and filter data
- useTodoStore which stores all of the data that has to do with Todos along with respective functions.

**Basic MUI theme location in src/providers/theme**

- theme.ts includes primary color and font from the ClearBlade website.

**All Button Components Created are located in src/components/Elements/Button**

- CreateNew is the create new button that outputs the TodoForm to create a new todo item.

- TodoActions are the group of buttons that are rendered on each todo item, which include delete, edit, toggle completion

- TodoTabs holds the tabs which filter the items based on their completion.

**All List components are located in src/components/Elements/List**

- List/Filtered lists includes 3 files, AllFilter, CompletedFilter, IncompleteFilter which are the components that take care of the logic that filters the todo items by completion status.

- TodoItem is the component that is each todo item, which outputs the title, completion, and the TodoActions buttons.

- TodoList calls each of the List/Filtered based on the completion of the todo item.

- TodoMap handles the logic to map all of the todo items (TodoItem components) from the Todo[] array that is stored in the useTodoStore zustand file.

**All Form/Input components are located in src/components/Form**

- EditTodoForm includes the Material UI text input field for when a user clicks on the edit button to edit a todo item (TodoItem). Takes user input and edits the todo with the same todo.id in the zustand useTodoStore file.

- TodoForm is the component that is rendered when a user presses the CreateNew component. Takes in the user input, and creates a new Todo object, which then pushes it into the todos array located in the zustand useTodoStore file.

- TodoSearch handles user input and inputs it into the zustand useSearchStore file, which any component can call to use to filter the currently displayed todos. This logic is called in the src/components/Elements/List/FilteredLists folder.

## Issues

Adding the drag and drop functionality to the application caused many bugs which would take too long to fix and implement. Some of the bugs but are not limited to are:

- When in the All filter tab, dragging the location of the TodoItem causes them to quickly flash their old positions before being persistent, while this does not occur when moving TodoItems in the completed or incomplete tabs.
- For reasons unknown, when dragging the TodoItems in the completed or incomplete tabs, the new location of the dragged element will become non-persistent, meaning that it will not save its new position. Clearing the NPM cache seems to fix this issue.
- Dragging does not work on mobile devices
- Dragging order persistence does not work on Safari and possibly other web browsers, feature was developed on Chrome.

Because there are so many issues with making draggable TodoItems, I will create another branch named "[todo-app-no-draggable](https://github.com/AdamJablonka/clearblade-coding-challenge/tree/todo-app-no-draggable)" that does not use these features, as I cannot seem to fix this feature and it will cause more bug debt if I wanted to add more features.
