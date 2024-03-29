import React from 'react'
import { useEffect } from 'react'
import "../../index.css"
import message from "../../assets/message.svg"
import pencil from "../../assets/pencil.svg"
import remove from "../../assets/delete.svg"
import history from "../../assets/history.svg"
import upgrade from "../../assets/upgrade.svg"
import updates from "../../assets/updates.svg"
import terms from "../../assets/terms.svg"
import privacy from "../../assets/privacy.svg"


const Hero = ({value, placeholder}) => {

    return (
        <div className="containerer flex flex-row flex-wrap-reverse bg-white">

            {/* left div */}
            <div className="left  bg-white text-black rounded-lg border-white px-5">
                <div className="tab  text-black ">
                    <button className="border-1 px-20 rounded-md btn btn-outline hov text-black ">+ New Chat</button>
                    <div className="flex px-14 py-5">
                        <img src={history} className="w-5" alt="" />
                        <p className='px-3'>History</p>
                    </div>

                    <div className="containere_tabs py-1 text-xs hov">
                        <div className="section">
                            <img className="w-3" src={message} alt="" />
                        </div>
                        <div className="section">What is marketing...</div>
                        <div className="section">
                            <img className="w-3" src={pencil} alt="" />
                        </div>
                        <div className="section">
                            <img className="w-3" src={remove} alt="" />
                        </div>
                    </div>
                    <div className="containere_tabs py-1 text-xs hov">
                        <div className="section">
                            <img className="w-3" src={message} alt="" />
                        </div>
                        <div className="section">Nolan Biography...</div>
                        <div className="section">
                            <img className="w-3" src={pencil} alt="" />
                        </div>
                        <div className="section">
                            <img className="w-3" src={remove} alt="" />
                        </div>
                    </div>
                    <div className="containere_tabs py-1 text-xs hov">
                        <div className="section">
                            <img className="w-3" src={message} alt="" />
                        </div>
                        <div className="section">Devin developer...</div>
                        <div className="section">
                            <img className="w-3" src={pencil} alt="" />
                        </div>
                        <div className="section">
                            <img className="w-3" src={remove} alt="" />
                        </div>
                    </div>
                    <div className="containere_tabs pt-4 pb-2 sm:pt-0 md:pt-48 lg:pt-64">
                    </div>
                    <div className="containere_tabs hov py-2">
                        <div className="section">
                            <img className="w-3" src={upgrade} alt="" />
                        </div>
                        <div className="section text-xs">Upgrade</div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </div>
                    <div className="containere_tabs py-2 hov">
                        <div className="section">
                            <img className="w-3" src={updates} alt="" />
                        </div>
                        <div className="section text-xs">Updates </div>
                        <div className="section"></div>
                        <div className="section"></div>
                    </div>
                    <div className="containere_tabs py-2 hov">
                        <div className="section">
                            <img className="w-3" src={terms} alt="" />
                        </div>
                        <div className="section text-xs">Terms</div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </div>
                    <div className="containere_tabs py-2 hov">
                        <div className="section">
                            <img className="w-3" src={privacy} alt="" />
                        </div>
                        <div className="section text-xs">Privacy</div>
                        <div className="section"></div>
                        <div className="section"></div>
                    </div>
                </div>


            </div>

            {/* middle div */}
            <div className="middle bg-white py-10">
                <div className="chat chat-start">
                    <div className="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble">You underestimate my power!</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto laudantium optio rerum cum corporis ipsum numquam, iusto dolor id hic libero distinctio, ut, necessitatibus itaque consequuntur? Adipisci, ad ipsa. <br />I have the high ground.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto laudantium optio rerum cum corporis ipsum numquam, iusto dolor id hic libero distinctio, ut, necessitatibus itaque consequuntur? Adipisci, ad ipsa. <br />I have the high ground.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble">You underestimate my power!</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto laudantium optio rerum cum corporis ipsum numquam, iusto dolor id hic libero distinctio, ut, necessitatibus itaque consequuntur? Adipisci, ad ipsa. <br />I have the high ground.</div>
                </div>
        
               
                <div className="input-bar pb-4">
                    <input className="text-white" type="text" placeholder={placeholder ? `Enter your ${value} query here...` : 'Select an option'}/>
                    <button className="color1 hov">Send</button>
                </div>
            </div>

            {/* right div */}
            <div className=" right bg-white text-black rounded-lg border-white "></div>
        </div>

    )
}

export default Hero