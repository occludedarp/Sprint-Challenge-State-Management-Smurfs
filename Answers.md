1. What problem does the context API help solve?
It helps solve the issue of having nested components that are in need of state that would typically be out of reach for them due to the extent of their nesting.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are objects that track the name of an action and what kind of data should be used by that kind of action.
reducers are patterns of successive cases of logic that describe the numerous ways a state object can have modified versions of its properties reflected to the renewed version of the state while maintaining the same shape.
the store is the the top-most resevoir for application wide state and it contains the reducer that enables its state to be renewed to reflect changes while maintaining immutability.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application State should be available to all components and functions that need it anywhere in the application for this reason it is declared at the top most level of all nodes of interaction between react elements and functions that constitute an application. component state is any state that is unlikely to travel or be needed by any other components or functions in the app other than its origin, for this reason it does not matter how nested its point of declaration is since it is typically used by only one component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk enables us to reflect the behavior of a finite state machine by allowing us to determine what state transition occurs (what kind of action to call dispatch on) according to  any feedback we signify as important in the action creator function (specify what kind of payload should be passed if we get the desired feedback). it modifies action creators with the dynamic ability to return functions rather than action objects.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
my favorite state management system so far is redux - It is a little hairier to learn compared to context but I think it manages state in a "cleaner" way and is worth the struggle to learn.
    