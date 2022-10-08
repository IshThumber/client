import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@mui/material";
import React from "react";

export default function Select(props) {
    const { name, label, error = null, value, onChange, options } = props;
    console.log(options);
    return (
        <FormControl variant="outlined" {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                value={value}
                onChange={onChange}
                name={name}
            >
                <MenuItem value="">None</MenuItem>
                {options.map((item) => (
                    <MenuItem key={item.key} value={item.key}>
                        {item.listValue}
                    </MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
}
