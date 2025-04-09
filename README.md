# components and features

## user-list, counter:

- ngrx, store

## login-form:

- reactive form

## push-me

- onPush

## ngTemplateOutlet

- from twitter Arman Vardanyan
- as a means of sharing a small piece of HTML with the same component template

## httpResource

- httpResource
- compute or linkedSignal

## reduce re-rendering

- components under favorites folder

## resource()

- component: resource-demo
- concepts:

```
Diving Deeper into the resource() API
The resource() API introduces two essential components to handle asynchronous data:

request: A function that returns a value used for the loader computation. Every time query() changes, the loader function is re-triggered, behaving similarly to a computed signal.
loader: The function where the actual API call is performed. It must return a promise, and errors can be handled like any standard promise.
Built-In Properties of resource()
The resource primitive comes with several useful out-of-the-box properties, all of which are signals:

value(): Retrieves the current value of the resource's response.
isLoading(): Indicates whether the resource is currently loading.
error(): Contains the error, if any, encountered during the API call.
```

## rxResource()
