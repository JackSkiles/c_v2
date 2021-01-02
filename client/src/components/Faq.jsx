import React, { Component } from 'react'
import Footer from './Footer'
import { Form, Button } from 'react-bootstrap'
import './home.css'

export default class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: ["hide", "hide", "hide", "hide",
                "hide", "hide", "hide", "hide", "hide",
                "hide", "hide", "hide", "hide", "hide",
                "hide", "hide", "hide", "hide"]
        }
    }
    handleChange = (e) => {
        const { name } = e.target;
        const { hidden } = this.state;
        const value = parseInt(name);
        console.log(name);
        if (this.state.hidden[parseInt(name)] == "show") {
            hidden[parseInt(name)] = "hide";
        } else {
            hidden[parseInt(name)] = "show";
        }
        this.setState({
            hidden,
        })
    }
    render() {
        return (
            <div className="main">
                <div className="imgCont">
                    <img className="topImg" src="bible.jpg"></img>
                </div>
                <div className="mainCont">
                    <div className="textCont">
                        <h2>Frequently Asked Questions:</h2>
                        <button name="0" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[0]}>A: Primitive Baptist ancestors have been called by various names over the ages. The name Primitive Baptist became popular in the early 1800s when the term primitive conveyed the idea of originality rather than backwardness. Accordingly, Primitive Baptists claim to maintain the doctrines and practices of the original Baptists, who are claimed to be the New Testament church.
                            Primitive also conveys the idea of simplicity. This well describes the Primitive Baptists, whose church services consist of nothing more than preaching, praying, and singing.
                            Even though this name can convey a misimpression under modern connotation, it also has some benefits; one being that it provokes interest and questions, which is of course the reason that you are reading this FAQ.
                        </p>
                        <button name="1" onClick={this.handleChange}>Q: What is the difference between Primitive Baptists and other Baptists?</button>
                        <p className={this.state.hidden[1]}>A: We include this question because it is likely the one question which is asked most frequently of Primitive Baptists. Unfortunately, the extreme diversity of modern Baptists makes the question almost impossible to answer without inaccurately representing at least some Baptists. Consequently, we assume that the reader has his or her own concept of what a Baptist is, and we leave it to the reader to make their own judgment as to how this question should be answered. The reader should examine the remainder of this FAQ to become acquainted with Primitive Baptist practices. The Articles of Faith and the Abstract to the Doctrine of Salvation will introduce the reader to Primitive Baptist views on doctrine. The Black Rock Address of 1832 will acquaint the reader with the circumstances which lead to the division between Primitive and other Baptists.</p>
                        <button name="2" onClick={this.handleChange}>Q: What is the Primitive Baptist view of the scriptures?</button>
                        <p className={this.state.hidden[2]}>A: Primitive Baptists view scriptures as the divinely inspired word of God and as the sole rule of faith and practice for the church. It is also believed that the scriptures have been divinely preserved over the ages, and that the 1611 King James version is the superior English translation of the scriptures.
                            Paul claimed that all scripture is given by inspiration of God (II Tim 3:16). Accordingly, Jesus said that scripture cannot be broken (Jn 10:35). Such infallibility could only occur in writings under the power of plenary (full) inspiration.
                            The apostle Peter said, …no prophecy of the scripture is of any private interpretation. For the prophesy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost (II Pet 1:20-21). Hence, scriptural prophecy is void of any private opinions of the writers. They were actually moved by the Spirit of God when writing.
                            Peter elsewhere tells us (I Pet 1:10-12) that these prophets examined their own writings to gain additional information about Christ and His coming. Such behavior is reasonable only if they wrote under inspirational power.
                            The assertion of plenary inspiration does not necessarily imply that the Spirit masked or overrode the writing styles or personalities of the writers; however, it does imply that the informational content of the scriptures is of God.
                            It would be senseless for God to inspire His word but then allow it to be lost to misplacement or mistranslation. In Ps 12:6-7 it is written: The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever. If this text has been preserved, then one must conclude that all scriptures have been preserved. Accordingly, Jesus said, Heaven and earth will pass away, but my words shall not pass away (Mt 24:35).
                            Since the scriptures are the word of God, no man or ecclesiastical body has authority above them. Furthermore, the instructions of the scriptures are sufficiently broad in scope to serve as the sole rule of faith and practice. Paul said that in the scriptures the man of God may be perfect, throughly furnished unto all good works (II Tim 3:16-17).
                            All books of the King James Bible are regarded as scripture. No books apart from these are so considered. The books of the Old Testament are known to be scripture because Jesus and the apostles quoted them as such. The books of the New Testament are known to be scripture because of Jesus’ promise that special inspirational guidance would be upon the apostles (Jn 14:26, Jn 16:13). This pertains to Paul also, as is implied by Peter in II Pet 3:15-16.
                            The inspiration of the Bible is further evidenced by its internal consistency and its historical, scientific, and prophetic accuracy.
                            Primitive Baptists strongly prefer in the 1611 King James version. This preference is based upon evidence indicating the superiority of its base manuscripts and upon evidence indicating the superior scholarship of its translators.
                        </p>
                        <button name="3" onClick={this.handleChange}>Q: How do Primitive Baptists use scriptural precedent to resolve questions of church practice?</button>
                        <p className={this.state.hidden[3]}>A: Primitive Baptists believe that issues of practice which are not explicitly addressed by scriptural commandment should be resolved, where possible, by scriptural precedent. Primitive Baptists are very disinclined to treat scriptural practices as mere cultural fashions of biblical times, and will do so only where this is obviously the case (I Cor 9:19-23).
                            Scriptures themselves teach that adherence to scriptural example is not a matter of indifference. Paul told the Corinthians, Be ye followers of me, even as I also am a follower of Christ. Now I praise you, brethren, that ye remember me in all things, and keep the ordinances (traditions), as I delivered them to you (I Cor 11:1-2). Accordingly, he told the Thessalonians, Therefore, brethren, stand fast, and hold the traditions which ye have been taught, whether by word or our epistle (II Thes 2:15). One chapter later he wrote, Now we command you, brethren, in the name of our Lord Jesus Christ, that you withdraw yourselves from every brother that walketh disorderly, and not after the tradition which he received of us (II Thes 3:6).
                            Traditions which have no biblical authority are nonobligatory, and to make them otherwise can reduce worship to vanity (Mk 7:5-13). On the other hand, traditions which have biblical authority are clearly expected of us, and are sufficiently important to be criteria of fellowship.
                            Since the New Testament church was a highly multicultural institution, being found in many nations of the world, practices uniformly observed in them cannot be dismissed as cultural peculiarities. They clearly expected these practices of themselves as churches of Jesus Christ, and we should view these practices the same way.
                        </p>
                        <button name="4" onClick={this.handleChange}>Q: How does the typical Primitive Baptist view his or her role in society?</button>
                        <p className={this.state.hidden[4]}>A: Primitive Baptists cannot consent with those who compromise scriptural commandments in order to gain social acceptance. We deny the claim that terms of truth and morality are to be guided by the ever changing winds of social values (Eph 4:14). Instead, these are defined by our ever constant Lord, and are revealed in His inspired word (Mal 3:6, Lk 21:33, Heb 13:8, I Pet 1:24-25).
                                Since it is our duty, both to God and man, to teach God’s revealed truth, and since we represent ourselves as doing such,any compromise of this truth would deceive and betray our fellow man, even when such compromise would serve to appease him.
                                However, it is not our purpose to incite hatred or persecution against any man or sector of society. Since our Baptist ancestry was greatly persecuted, and since we are also falsely accused and ridiculed unto this day, conscience forbids that we should bring the same upon others. Instead, the scriptures command us that the servant of the Lord must not strive; but be gentle unto all men, apt to teach, patient, in meekness instructing those that oppose themselves; if God peradventure will give them repentance to the acknowledging of the truth (II Tim 2:24-25).
                                Accordingly, we recognize that love and charity are the first test of all that claims to be Christian (Mt 22:36-40, Jn 13:35, I Jn 2:9-11), and though we have all truth, we are but nothing without it (I Cor 13:2).
                        </p>
                        <button name="5" onClick={this.handleChange}>Q: Why do Primitive Baptists refer to their ministers as elders?</button>
                        <p className={this.state.hidden[5]}>A: The scriptures offer two alternate titles for preachers. These are bishop and elder (I Tim 3:1-7, Tit 1:5-9, I Pet 5:1). The importance of using these scripturally authorized titles is emphasized by Jesus’ condemnation of the Pharisees for taking aggrandizing titles to themselves (Mt 23:5-12).
                            The term reverend is use only once in the scriptures where it has reference to God (Ps 111:9). We are therefore unworthy to wear this title.
                            Though a minister can be a father in certain respects (I Cor 4:15), this term is never used as a title in the scriptures. In fact Jesus commanded to call no man your father upon the earth (Mt 23:9).
                            The term apostle is clearly used by the scriptures to mean a minister who is an eyewitness to the sufferings and resurrection of Christ (Acts 1:1-3, Acts 1:21-26, I Cor 9:1, I Pet 5:1). Also, apostles were granted special powers not possessed by ordinary elders (Acts 8:18, II Cor 12:12, Heb 2:3-4). Any man claiming this title for himself today does so in error.
                            That elder refers to gospel preachers is evidenced by the fact that both Peter and John claimed this title for themselves (I Pet 5:1, II Jn 1, III Jn 1).
                            That bishop and elder refer to the same office is proven by the interchanged usage of these terms in Tit 1:5-9. However, Primitive Baptists typically refrain from the usage of bishop because of the misimpressions that would be conveyed under modern connotation.
                        </p>
                        <button name="6" onClick={this.handleChange}>Q: Why do Primitive Baptists not have schools for training ministers?</button>
                        <p className={this.state.hidden[6]}>A: Primitive Baptists elders are chosen by the individual congregations from among male members who have proven to be faithful to the church and its principles. These men are given the opportunity to speak over a trial period to determine if they have a gift to preach. This trial period typically lasts from one to five years. Those judged by the congregations to satisfy scriptural qualifications for the ministry are then ordained by a presbytery of elders.
                            All Primitive Baptist elders are expected to be self educated in the Word of God and are expected to seek the counsel of experienced ministers about questions of scriptural interpretation and other matters pertaining to the church. Both young and old elders are expected to seek the aid of the Holy Spirit in the furtherance of their wisdom and understanding.
                            This system of education is preferred above ministerial training schools because:
                            1. Elders in the New Testament were primarily self-educated in the scriptures.
                            2. Elders in the New Testament learned under the direction of the Holy Spirit and other elders rather than academicians.
                            3. The system makes the scriptures themselves to be the curriculum.
                            4. The elder learns in the same setting in which he is expected to teach. Congregations taught by these elders will be expected to have the discipline to educate themselves in the Word of God. The elder should therefore prove himself to have the same discipline.
                            5. The system is less vulnerable to the widespread propagation of error so commonly found when numerous ministers are trained under the same teachings of heretical academicians.
                        </p>
                        <button name="7" onClick={this.handleChange}>Q: Why do Primitive Baptists require that elders be male?</button>
                        <p className={this.state.hidden[7]}>A: This is a requirement which is very clearly stated in the scriptures (I Cor 14:35-36, I Tim 2:11-12, I Tim 3:2). Accordingly, there is no scriptural precedent for female elders. Churches placing women in ministerial offices appear to regard the authority of the scriptures to be subordinate to current social fashions.
                            The requirement that elders be men does not relieve women of their obligation and right to teach in other capacities (I Tim 5:14, Tit 2:3-5), nor does it disallow the possibility of women possessing special spiritual guidance and gifts (Jud 4:4, II Ki 22:14, Lk 2:36, Acts 2:17, Acts 21:9). However, we are persuaded that any woman assuming a teaching capacity in the church cannot do so under the influence of God’s Spirit as this would place the Spirit at contradiction with Himself.
                            Though certain modern teachers offer alternate explanations to the scriptures cited above, an examination of their arguments reveals prejudiced views and a willingness to resort to unreasonable extremes to defend them. The same methods of reason would make anything mean nothing.
                        </p>
                        <button name="8" onClick={this.handleChange}>Q: Why do Primitive Baptists use real wine and real unleavened bread in communion?</button>
                        <p className={this.state.hidden[8]}>A: While scriptural descriptions of the original communion use the terms bread, the cup, and fruit of the vine, it may be conclusively inferred that the bread was unleavened and that the drink was fermented wine. This follows from:
                            1. The communion took place immediately after the Passover. This was a time in which leavened bread was prohibited, both by scriptural law and by Jewish tradition (Ex 12:3-8, Num 9:9-11, Deut 16:1-3, Mt 26:17, Mk 14:12, Lk 22:7).
                            2. Leaven is used in the scriptures as an emblem of sin (Lk 12:1, I Cor 5:6-8, Gal 5:7-9) and is therefore an unsuitable representative of the Lord’s body.
                            3. Wine is symbolically consistent with unleavened bread in that neither contain leaven. On the other hand, unfermented grape juice would contradict all that is portended by the unleavened bread because grape juice typically does contain leaven. There are some who erroneously assert that the opposite is true – that wine contains leaven but grape juice does not. The reader is invited to consult any authority on wine chemistry to resolve the matter.
                            4. Wine was a traditional part of the Jewish Passover.
                            5. Without modern methods of refrigeration, grape juice could not be preserved for all times of the year. The Passover season was not conducive to grape juice since it was well between harvests.
                            6. The Corinthians obviously used a fermented substance in their communion service since they perverted it into a drunken festival (I Cor 11:20-30). Paul condemns them for their impiety and excesses, but not for the usage of wine in communion.
                            The importance of adhering to the scriptural example in this matter cannot be questioned since God punished the Corinthians with illness and death for departing from it (I Cor 11:29-30). The usage of a leavened substance, such as grape juice, to represent the Lord is, in our opinion, a severe negligence, and is at risk of being chargeable as failure to discern the body of the Lord (I Cor 11:29).
                        </p>
                        <button name="9" onClick={this.handleChange}>Q: Why do Primitive Baptists wash feet during communion?</button>
                        <p className={this.state.hidden[9]}>
                            John explains that, at the end of the Last Supper, the Lord began to wash the feet of the disciples. After performing this great act of humility, the Lord said, If I then, your Lord and master, have washed your feet; ye also ought to wash one another’s feet. For I have given you an example, that ye should do as I have done unto you (Jn 13:14-15). Primitive Baptists understand that this commandment is to be followed in literal detail as well as in spirit.
                            Many will dismiss these actions of Jesus as being no more than symbolic gestures; however, these same persons understand the last supper to be a literal example. We fail to see the consistency in this. If we are to take one as a symbolic gesture, we must take the other as being such also. Conversely, if the Lord intended literal observance of the last supper, then literal observance must have been intended for feet washing as well. The scriptures leave no doubt that the last supper is to be literally observed (I Cor 10:16-21, I Cor 11:23-30).
                            I Tim 5:9-10 indicates that feet washing was practiced by the New Testament church. Neither this text nor the example of Jesus can be dismissed as a cultural phenomenon since texts describing the cultural practice of feet washing have individuals washing their own feet (Gen 43:24, Judges 19:21, Song 5:3).
                            Unfortunately, such plain reasoning is easily obscured by human vanity, yet it was this very vanity that Jesus would have us destroy in the act of feet washing
                        </p>
                        <button name="10" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[10]}>

                        </p>
                        <button name="11" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[11]}>

                        </p>
                        <button name="12" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[12]}>

                        </p>
                        <button name="13" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[13]}>

                        </p>
                        <button name="14" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[14]}>

                        </p>
                        <button name="15" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[15]}>

                        </p>
                        <button name="16" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[16]}>

                        </p>
                        <button name="17" onClick={this.handleChange}>Q: Why the name Primitive Baptist?</button>
                        <p className={this.state.hidden[17]}>

                        </p>
                    </div>
                    <div className="textCont">
                        <h2>“</h2>
                        <p>
                            For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.</p>
                        <p>— Ephesians 2:8-9</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
