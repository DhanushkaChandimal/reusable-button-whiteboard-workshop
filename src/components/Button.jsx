import React from "react";

const varientClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-700 text-gray-800',
    danger: 'bg-red-600 text-white',
}

const Button =({
    variant='primary',
    children,
    className = '',
    onclick,
    ...props
}) => {
    return (
        <div>
            <button className={`px-5 py-2 m-1 rounded-3xl font-semibold transition-colors
                ${varientClasses[variant] ?? varientClasses.primary} ${className}`}
                onClick={onclick} {...props}
            >
                {children}
            </button>
        </div>
    )
}

export default Button;