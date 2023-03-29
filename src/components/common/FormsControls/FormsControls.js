import classes from './FormsControls.module.css';


const FormControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + ( hasError ? classes.error : "" )}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>   
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>   
}

/* export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + ( hasError ? classes.error : "" )}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + ( hasError ? classes.error : "" )}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
} */