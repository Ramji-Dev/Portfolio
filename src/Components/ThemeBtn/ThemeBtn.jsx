import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { setTheme } from '../../features/ThemeSlice/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

gsap.registerPlugin(useGSAP);

export default function ThemeBtn() {

    const themeMode = useSelector((state) => state.themeChanger.theme)
        
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(themeMode)
        localStorage.setItem('theme', JSON.stringify(themeMode))
    }, [themeMode])


    const dispatch = useDispatch();
    
    const ref = useRef()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        
        if (darkModeStatus) {
            dispatch(setTheme('light'));
            document.querySelector('.ri-moon-line').style.display = 'none';
            document.querySelector('.ri-sun-line').style.display = 'inline';
        } else {
            dispatch(setTheme('dark'));
            document.querySelector('.ri-moon-line').style.display = 'inline';
            document.querySelector('.ri-sun-line').style.display = 'none';
        }
    }

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to('.ri-moon-line', {
                opacity: 1,
                rotate: 0,
                delay: 4.9
            })
        })

        mm.add("(max-width: 768px)", () => {
            gsap.to('.ri-moon-line', {
                opacity: 1,
                duration: 1,
                rotate: 0,
                delay: 0.5
            })
        })
        
    },{scope: ref})

    return (
        <label className="relative inline-flex items-center cursor-pointer " ref={ref}>
            <input
                type="checkbox"
                value=""
                className="sr-only peer "
                onChange={onChangeBtn}
                checked={themeMode==="light"}
            />
            <i className="ri-sun-line cursor-pointer  hidden"></i>
            <i className="ri-moon-line cursor-pointer opacity-0 -rotate-90"></i>
        </label>
    );
}

