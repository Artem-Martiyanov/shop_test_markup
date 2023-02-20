import React from 'react';import cl from './BreadCrumbs.module.css'import {Link} from "react-router-dom";const BreadCrumbs = ({path}) => {    const pathNames = path.split('/')    pathNames.shift();    const dictionary = {        'product': 'брюки',        'howtochoose': 'Как выбрать'    }    return (        <ul className={cl.list}>            <li className={cl.item}>                <Link className={cl.link + ' ' + cl.active} to='/'>                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">                        <g>                            <mask id="path-1-inside-1_1_162" fill="white">                                <path d="M14 14H0V12.5V6L7 0L14 6V14Z"/>                            </mask>                            <path d="M5 11C5 11.2761 5.22386 11.5 5.5 11.5C5.77614 11.5 6 11.2761 6 11H5ZM5.5 8.5V8H5V8.5H5.5ZM8.5 8.5H9V8H8.5V8.5ZM8 11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11H8ZM6 11V8.5H5V11H6ZM5.5 9H8.5V8H5.5V9ZM8 8.5V11H9V8.5H8ZM0 14H-1V15H0V14ZM14 14V15H15V14H14ZM14 6H15V5.54007L14.6508 5.24074L14 6ZM7 0L7.65079 -0.759257L7 -1.31708L6.34921 -0.759257L7 0ZM0 6L-0.650791 5.24074L-1 5.54007V6H0ZM0 15H14V13H0V15ZM15 14V6H13V14H15ZM14.6508 5.24074L7.65079 -0.759257L6.34921 0.759257L13.3492 6.75926L14.6508 5.24074ZM6.34921 -0.759257L-0.650791 5.24074L0.650791 6.75926L7.65079 0.759257L6.34921 -0.759257ZM-1 6V12.5H1V6H-1ZM-1 12.5V14H1V12.5H-1Z"                                  fill="black" mask="url(#path-1-inside-1_1_162)"                            />                        </g>                    </svg>                </Link>            </li>            {pathNames.map((path, i, arr) => {                return (                    arr.length - 1 === i ?                        (<li className={cl.item} key={path}>                            <span className={cl.link}>                                {dictionary[path]}                            </span>                        </li>)                        :                        (<li className={cl.item} key={path}>                            <Link className={cl.link + ' ' + cl.active} to={'/' + path}>                                {dictionary[path]}                            </Link>                        </li>))            })}        </ul>    );};export default BreadCrumbs;