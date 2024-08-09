import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            <Navbar />
            <Hero />
            <footer className="bg-gray-800 text-white p-6 mt-8">
                <p className="text-center">&copy; 2024 Prof. Sunil Jha. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
