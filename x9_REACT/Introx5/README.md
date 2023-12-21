### Form Handling

## Why it is such a big issue ?

form submission par website reload hojati hain & React ka main focus hain webapage reload nahi hona chaiye

WE CAN STOP REFRESHING WITH THE HELP OF 3 WAYS :-  
### -->useRef
-In this way we select all the inputs and save their values when form get submitted
-With the help of useRef we can select any HTML input
### -->controlled components 
-Whenever we write something only through useState to update data in realtime
### -->React hook form * the best way
-to be downloaded from website 
```bash
npm install react-hook-form
```
-import useform
```javascript
import { useForm, SubmitHandler } from "react-hook-form"
```