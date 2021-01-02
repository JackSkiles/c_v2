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
                            A: John explains that, at the end of the Last Supper, the Lord began to wash the feet of the disciples. After performing this great act of humility, the Lord said, If I then, your Lord and master, have washed your feet; ye also ought to wash one another’s feet. For I have given you an example, that ye should do as I have done unto you (Jn 13:14-15). Primitive Baptists understand that this commandment is to be followed in literal detail as well as in spirit.
                            Many will dismiss these actions of Jesus as being no more than symbolic gestures; however, these same persons understand the last supper to be a literal example. We fail to see the consistency in this. If we are to take one as a symbolic gesture, we must take the other as being such also. Conversely, if the Lord intended literal observance of the last supper, then literal observance must have been intended for feet washing as well. The scriptures leave no doubt that the last supper is to be literally observed (I Cor 10:16-21, I Cor 11:23-30).
                            I Tim 5:9-10 indicates that feet washing was practiced by the New Testament church. Neither this text nor the example of Jesus can be dismissed as a cultural phenomenon since texts describing the cultural practice of feet washing have individuals washing their own feet (Gen 43:24, Judges 19:21, Song 5:3).
                            Unfortunately, such plain reasoning is easily obscured by human vanity, yet it was this very vanity that Jesus would have us destroy in the act of feet washing
                        </p>
                        <button name="10" onClick={this.handleChange}>Q: Why do Primitive Baptists commune only with baptized believers of like faith and practice?</button>
                        <p className={this.state.hidden[10]}>
                            A: The primary reason for requiring communion participants to be baptized believers is expressed by the words of Paul: Wherefore, whosoever shall eat of this bread, and drink of this cup of the Lord, unworthily, shall be guilty of the body and blood of the Lord. But let a man examine himself, and so let him eat of that bread, and drink of that cup. For he that eateth and drinketh unworthily, eateth and drinketh damnation to himself, not discerning the Lord’s body (I Cor 11:27-29). A person who has not yet submitted to the obedience of baptism has yet to examine himself in matters of Christian duty, and therefore, should not partake of communion. Nor should the church sanction such participation since this would make baptism appear inconsequential, thereby dulling the individual’s sense of conviction over their negligence in this matter. Such churches also carelessly treat others in that they fail to alert them to the gravity of communion and the consequences of being an unqualified participant.
                            Jesus’ final statement to his disciples clearly specified the proper order of gospel obedience: Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen (Mt 28:19-20). Hence, the proper order is: belief of the gospel, then baptism, then observance of all that Jesus commanded. This pattern is consistently followed elsewhere in the scriptures (Mk 16:16, Acts 2:41-42, Acts 8:36-37, Rom 6:3-4).
                            Neither should baptized persons participate in the communion of churches espousing principles contrary their own. Paul’s statement in I Cor 10:16-21 forcefully argues that communion denotes the highest degree of fellowship in matters of principle. Communion is in effect a common union with the implied principles. For this reason, Primitive Baptist communion services involve only baptized individuals of like faith and practice.
                        </p>
                        <button name="11" onClick={this.handleChange}>Q: Why do Primitive Baptists require baptism by immersion?</button>
                        <p className={this.state.hidden[11]}>
                            A: The example set by Jesus is clearly one of baptism by immersion. Mark described Jesus’ baptism with these words: And straitway coming up out of the water, he saw the heavens opened, and the Spirit like a dove descending upon him (Mk 1:10). A baptism followed by one coming up out of the water cannot be by sprinkling or pouring. We must take Jesus’ example as being the ultimate authority on the matter.
                            John baptized in AEnon because there was much water there (Jn 3:23). An abundance of water is not needful for sprinkling or pouring. Accordingly, the Ethiopian eunuch was baptized in a body of water (Acts 8:36).
                            Paul explains in Rom 6:1-5 that baptism represents a death, burial, and resurrection. Nothing about pouring or sprinkling depicts these events. Immersion obviously does.
                            Finally, the Greek word for baptism (baptisma) means immersion.
                        </p>
                        <button name="12" onClick={this.handleChange}>Q: Why do Primitive Baptists rebaptize persons joining them from other orders?</button>
                        <p className={this.state.hidden[12]}>
                            The scriptural precedent for rebaptism is taken from Acts 19:1-7. These verses teach that persons formerly baptized under improper principles should be baptized again, and that failure to do so can prevent proper reception of the Holy Spirit.
                            Since baptism is an ordinance of the church, it is necessarily tied to the principles maintained by the church. When these principles are significantly changed, the baptism should be changed also. The claim that baptism is an ordinance of the church is proven by the fact it is the scriptural means of induction to the church (Acts 2:41). Further proof is provided in Paul’s statement: Christ sent me not to baptize but to preach the gospel (I Cor 1:17). This statement refers to Paul’s evangelical duties, and implies that baptism is principally the responsibility of local churches and their pastors.
                            There are cases where former baptisms are obviously in gross error (e.g. infant baptisms, sprinklings, etc) and therefore necessitate rebaptism; however, the scriptures offer few guidelines as to the exact point at which rebaptism is required; consequently, the safest and most objective policy is to rebaptize as a general rule.
                        </p>
                        <button name="13" onClick={this.handleChange}>Q: Why do Primitive Baptists not use musical instruments?</button>
                        <p className={this.state.hidden[13]}>
                            A: We can find no biblical precedent for the usage of musical instruments in New Testament worship. The scriptures give repeated instructions to sing in the church, but never to play (Rom 15:9, I Cor 14:15, Eph 5:19, Col 3:16, Heb 2:12, Ja 5:13).
                            It will occasionally be objected that there are also many other things in all modern churches which are without scriptural precedent – things such as electric lights, air conditioners, etc; however, these items affect only the setting of worship and are not integral to it. The scriptures have clearly afforded much liberty in such matters (Lk 5:3, Jn 4:20-24, Acts 20:7-8, Acts 21:5). A distinction must also be made between an addition to the New Testament pattern and an aid to this pattern. Electric lights, song books, reference Bibles, etc. are aids to worship, but musical instruments are additions to worship.
                            For a discussion about the importance of adhering to scriptural example, we refer the reader to the question regarding scriptural precedent.
                            It is commonly objected that Psalm 150 offers instruction to praise the Lord with various kinds of musical instruments. However, these instructions are not referring to New Testament worship. Procedure used in Old Testament worship obviously cannot be used to amend the New Testament pattern; otherwise, animal sacrifices, priests, etc. could be legitimately introduced to the church. It should be observed that Psalm 150 also commands to praise the Lord with dance (Ps 150:4), yet those who use the Psalm to defend musical instruments would generally condemn dancing in the church.
                        </p>
                        <button name="14" onClick={this.handleChange}>Q: Why do Primitive Baptists not have Sunday schools?</button>
                        <p className={this.state.hidden[14]}>
                            A: Bible study is greatly to be commended, and there are definite benefits to studying and discussing scriptures with other Christians; however, scriptural example dictates that such activitiesshould be conducted in contexts other than formal church worship. There is nothing in scriptures to indicate that worshippers, either in the church or in the law, were ever segregated by knowledge, age, sex, marital status, or any other criterion. Instead, all worshipped in a common assembly.
                            The importance of adherence to scriptural example on this and other matters is considered in the question treating scriptural precedent.
                            Some will say that Sunday schools are necessary for the instruction of children; however, the Lord cautions against assuming a posture which views the understanding of children with slight or disdain. He tells us that their understanding can exceed that of the wise and prudent (Mt 11:25, Mt 21:15), and that God has ordained praise in the utterances of babes (Mt 21:16). Accordingly, Jesus rebuked His disciples for denying admittance of children to His presence (Mt 19:13-15, Mk 9:36-37, Mk 10:13-15). Hence, it should not be assumed that children are incapable of receiving proper instruction from the general assembly. The modern practice of denying children entrance to church sanctuaries is very much against the spirit of the scriptures.
                        </p>
                        <button name="15" onClick={this.handleChange}>Q: Why do Primitive Baptists not have organized programs for the entertainment of youth?</button>
                        <p className={this.state.hidden[15]}>
                            A: Primitive Baptists do not condemn entertainment when it is moral and in moderation. We also recognize that men of God in the scriptures occasionally use humor and sarcasm (Is 40:18-23, Is 44:12-20, Lk 16:9), so this too is acceptable provided that it is clean, purposeful, and moderate. However, the idea that it is the role of the church to entertain is absolutely alien to all that is scriptural.
                            The Lord condemned the priests of Israel, saying, …they have put no difference between the holy and profane, neither have they shewed difference between the unclean and the clean… (Ezek 22:26). Again, the Lord said, And they shall teach my people the difference between the holy and profane, and cause them to discern between the unclean and clean (Ezek 44:23). When churches have taken sports, games, comedy, and other amusement, and have commingled them with songs of praise, prayer, and preaching, then no difference is being made between the holy and profane.
                            A church involved in such indiscretions should not expect the blessings of God in its efforts to preach the gospel. The Lord told Jeremiah, …if thou take forth the precious from the vile, thou shalt be as my mouth… (Jer 15:19). We are therefore the mouth of God only when we make a difference between the precious and the vile. The Hebrew for vile can sometimes mean gluttonous, which condemns modern practices yet further. Modern Americans are essentially baptized in entertainment every day of the week, yet some are so worldly that they expect even more of it from the church.
                            The scriptures suggest that Paul had an interest in some sports (I Cor 9:24, II Tim 2:5, Heb 12:1), yet he condemned competitiveness in the church (I Cor 4:7, I Cor 11:21-22). This further illustrates that things which are appropriate in everyday life are not necessarily appropriate in a church context.
                            Preoccupation with entertaining youth often leads to neglect in teaching youth. This is particularly true when such entertainment is purposed to be a diversion from sinful activities common to young people. The instruction of the scriptures are both necessary and sufficient to guide young people as well as old, and to strengthen them against the temptations of the world (Deut 6:6-7, Ps 119:9-11, I Tim 5:14, II Tim 3:15-17).
                        </p>
                        <button name="16" onClick={this.handleChange}>Q: Why do Primitive Baptists not have crucifixes or pictures of Jesus in their churches and homes?</button>
                        <p className={this.state.hidden[16]}>
                            A: The scriptures unequivocally forbid images of God of any kind (Ex 20:4-5, I Cor 10:14, Gal 5:19-21, I Jn 5:21). Since Jesus is the Son of God, and therefore equal with God (Jn 5:18, Philip 2:5-8), pictures of Jesus must also be censured by these commandments.
                            Pictures of Jesus are in every sense idols. The popular portraits of Jesus are products of man’s imagination, and misrepresent Jesus in dishonoring ways. If Jesus’ hair had in fact been long, then Paul would have never condemned this practice (I Cor 11:14).
                        </p>
                        <button name="17" onClick={this.handleChange}>Q: What is the attitude of Primitive Baptists towards tongues and other miraculous spiritual gifts?</button>
                        <p className={this.state.hidden[17]}>
                            A: Any true Christian should firmly believe in the possibility of miracles (Mt 17:19-20, Mk 9:23, Mk 11:23), and most prayerful Christians can witness to the fact that miracles do occur. However, scriptures and experience lead us to expect such miracles to be elicited by the general prayers of God’s people rather than the workings of someone possessing a miraculous spiritual gift.
                            New Testament occurrences of miraculous gifts are almost always observed either in apostles or in those upon whom apostles had laid hands. The apostles had special gifts, and had the ability to confer them upon others. However, it appears that those receiving miraculous gifts from the apostles were not able to transmit them to third parties. Hence, Philip received special gifts from the apostles (Acts 6:5-6, Acts 8:5-8), but was unable to confer these same gifts upon the Samaritans (Acts 8:5-19). Since there are no apostles in the world today, any modern occurrences of extraordinary spiritual gifts would represent an exception to the scriptural pattern.
                            This is not to say that such exceptions are impossible, and it certainly is not intended to say that miracles can no longer happen. However, the scriptures lead us to expect such miracles to be elicited by the individual and collective prayers of God’s people (Mt 17:19-20, Mk 9:23, Mk 11:23, Philip 4:6, Ja 5:13-15, I Jn 5:14-15).
                            Paul told the Corinthian church: Truly the signs of an apostle were wrought among you in all patience, in signs, and wonders, and mighty deeds (II Cor 12:12). This verse implies that extraordinary spiritual gifts were signs of apostleship. This raises the simple question: If ordinary gospel ministers also possess these gifts, then how could such abilities distinguish an apostle from other ministers? If it is true that modern charismatic ministers have the ability to heal, speak in tongues, etc, then Paul appealed to invalid grounds for confirmation of his apostleship.
                            The reasoning above is further substantiated by Heb 2:3-4, How shall we escape, if we neglect so great salvation; which at the first began to be spoken to us by the Lord, and was confirmed to us by them that heard him; God also bearing them witness, both with signs and wonders, and with divers miracles, and gifts of the Holy Ghost, according to his own will? This text appeals to the signs and wonders of those that heard the Lord, but says nothing of miraculous gifts being observed in the current generation of Christians. Since miracles within the observation and memory of the reader would serve as greater confirmation than reports of miracles in the past, one should certainly expect the writer of Hebrews to have advanced these as proof if miraculous gifts were still occurring with equal degree and frequency.
                            There are other indications that the frequency of miraculous gifts tended to diminish toward the end of New Testament times. Paul told Timothy to take wine for a chronic stomach problem (I Tim 5:23), and spoke of leaving Trophimus sick at Miletum (II Tim 4:20). In earlier times, one would have expected these to have been healed by apostolic powers.
                            The decreased frequency of miracles was partly due to expiration of the apostolic era, and partly due to the gospel being carried to the Gentiles. Paul said that it was the nature of a Jew to require signs, but the nature of the Gentiles to demand wisdom (I Cor 1:22). Accordingly, the experience of scriptures indicates that the Lord is most apt to give signs when dealing with the Jewish people.
                            The practice of counterfeiting miracles in the name of Christ is to be condemned (Mt 7:21-23), not only because it is deceptive, but because it tends to discredit the true miracles recorded in the Bible, and diminishes belief in the power of prayer (II Pet 2:1-2).
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
