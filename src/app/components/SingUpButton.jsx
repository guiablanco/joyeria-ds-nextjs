'use client'
import { Button } from "@mui/material";
import { Inter } from 'next/font/google';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

const SingUpButton = () => {
    return (
        <Button 
        variant="outlined"
        style={{
            color:'black', 
            border:'solid 0.2rem rgb(254,243,253)', 
            textTransform: 'none', 
            height:'1.6rem', 
            width: '5rem',
            fontSize: "0.75rem",
            padding: '0'
            }}
        className={inter.className}
        size="small"
        >
            <Link href='/sing-up'>
                Regístrate
            </Link>
        </Button>
    );
}

export default SingUpButton;
