export interface ButtonProps {
   variant : "outlined" | "contained",
   color : 'primary' | 'secondary',
   text : string,
   onClick : () => void;
}