'use client'
import { Button } from "@mui/material";
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

const LoginButton = () => {
    return (
        <Button 
        variant="outlined"
        style={{
            color:'black', 
            border:'solid 0.2rem rgb(254,243,253)', 
            textTransform: 'none', 
            maxHeight:'1.5rem', 
            maxWidth: '5rem',
            fontSize: "0.75rem"
            }}
        className={inter.className}
        size="small"
        >
            <Link href='/login'>
                Accede
            </Link>
        </Button>
    );
}

export default LoginButton;
