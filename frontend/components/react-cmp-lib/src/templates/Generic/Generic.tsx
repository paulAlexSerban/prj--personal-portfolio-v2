import React from 'react';
import { FC } from 'react';

import Paragraph from '../../atoms/Paragraph';
import Heading from 'src/atoms/Heading';

export type GenericProps = {};

const Generic: FC<GenericProps> = () => {
    return (
        <>
            <header className="container">
                <Heading
                    level={1}
                    title="From Concept to Cloud"
                    subtitle="Full Stack Development with React and AWS"
                    align="left"
                />
                <Paragraph size="base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
                </Paragraph>
            </header>
            <nav className="container line-up">
                <div>
                    <a href="#logo">Logo</a>
                </div>
                <ul className="switcher">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
            </nav>
            <main className="container">
                <section>
                    <article>
                        <Heading level={2} align="left" title="Text" className="heading--highlight" />
                        <Paragraph size="xs">
                            Paragraph - XSMALL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            accusantium?
                        </Paragraph>

                        <Paragraph size="sm">
                            Paragraph - SMALL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            accusantium?
                        </Paragraph>
                        <Paragraph size="base">
                            Paragraph - BASE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
                        </Paragraph>
                        <Paragraph size="lg">
                            Paragraph - LARGE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            accusantium?
                        </Paragraph>
                        <Paragraph size="xl">
                            Paragraph - XLARGE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            accusantium?
                        </Paragraph>
                    </article>
                    <article>
                        <Heading level={2} align="left" title="Headings" className="heading--highlight" />
                        <Heading level={1} align="left" title="Heading 1 <h1>" />
                        <Heading level={2} align="left" title="Heading 2 <h2>" />
                        <Heading level={3} align="left" title="Heading 3 <h3>" />
                        <Heading level={4} align="left" title="Heading 4 <h4>" />
                        <Heading level={5} align="left" title="Heading 5 <h5>" />
                        <Heading level={6} align="left" title="Heading 6 <h6>" />
                    </article>
                    <article>
                        <Heading level={2} align="left" title="Articles" className="heading--highlight" />
                        <article>
                            <Heading
                                level={2}
                                align="left"
                                title="Heading 2 With Subtitle"
                                subtitle="Lorem subtitle text"
                            />
                            <Paragraph size="base">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus odio assumenda earum
                                necessitatibus sequi obcaecati quod nihil voluptate rem, deserunt vitae quidem accusamus
                                alias voluptatem nam molestiae ea eligendi ut.
                            </Paragraph>
                            <article>
                                <Heading
                                    level={3}
                                    align="left"
                                    title="Heading 3 With Subtitle"
                                    subtitle="Lorem subtitle text"
                                />
                                <Paragraph size="base">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus odio assumenda
                                    earum necessitatibus sequi obcaecati quod nihil voluptate rem, deserunt vitae quidem
                                    accusamus alias voluptatem nam molestiae ea eligendi ut.
                                </Paragraph>
                                <article>
                                    <Heading
                                        level={4}
                                        align="left"
                                        title="Heading 4 With Subtitle"
                                        subtitle="Lorem subtitle text"
                                    />
                                    <Paragraph size="base">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus odio
                                        assumenda earum necessitatibus sequi obcaecati quod nihil voluptate rem,
                                        deserunt vitae quidem accusamus alias voluptatem nam molestiae ea eligendi ut.
                                    </Paragraph>
                                </article>
                            </article>
                        </article>
                    </article>
                    <article>
                        <Heading level={2} align="left" title="Lists" className="heading--highlight" />
                        <Heading level={3} align="left" title="Unordered List" />
                        <ul>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ul>
                        <Heading level={3} align="left" title="Ordered List" />
                        <ol>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ol>
                    </article>
                    <article>
                        <Heading level={2} align="left" title="Colors" className="heading--highlight" />
                        <div
                            className="grid"
                            style={{ '--grid-template-cols': 'repeat(12, 1fr)' } as React.CSSProperties}
                        >
                            <div className="square bkg-color-red"></div>
                            <div className="square bkg-color-yellow"></div>
                            <div className="square bkg-color-green"></div>
                        </div>
                    </article>
                </section>
            </main>
            {/* 

            <footer className='grid center'>
                <div className="row">
                    <Paragraph size="base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
                    </Paragraph>
                </div>
            </footer> */}
        </>
    );
};

export default Generic;
