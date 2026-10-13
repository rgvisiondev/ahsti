"use client";

import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function TermsAndConditions() {
    return (
        <div className="bg-[#F5F7FA] min-h-screen">
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Terms and Conditions
                </h1>

                <div className="flex flex-col gap-6 text-gray-700 leading-7">
                    <div>
                        <p>
                            These Terms and Conditions are a legal agreement, between you and Affordable Homes of South
                            Texas, Inc. that govern your access to and use of the Services. Please review these Terms and
                            Conditions before you decide whether to accept them and continue with the use of the Services.
                            These Terms and Conditions apply to all visitors, users, and others who access or use the
                            Service.
                        </p>
                        <p className="mt-4">
                            By accessing or using the Service you agree to be bound by these Terms and Conditions. If you
                            disagree with any part of the terms then you may not access or use the Services offered and
                            provided by Affordable Homes of South Texas, Inc. on and through this website.
                        </p>
                    </div>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Definitions.</h4>
                        <p>
                            “Services” shall mean any service provided by Affordable Homes of South Texas, Inc., which
                            service is facilitated in any way by, or related in any way to this website, including but
                            not limited to housing counseling, home buyer education, information collection and storage,
                            electronic communication, application for, and/or extension of credit.
                        </p>
                        <p className="mt-3">
                            “We” and “we” shall mean Affordable Homes of South Texas, Inc.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Survival of Terms.</h4>
                        <p>
                            All provisions of the Terms and Conditions which by their nature should survive termination
                            shall survive termination, including, without limitation, ownership provisions, warranty
                            disclaimers, indemnity and limitations of liability.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Intellectual Property.</h4>
                        <p>
                            You acknowledge that Affordable Homes of South Texas, Inc. retains all rights, title, and
                            interest in and to all copyrights, trademarks, trade secrets, patents, and any other
                            proprietary rights in the Services, the software and application programming interfaces
                            comprising the Services, and all content therein. Affordable Homes of South Texas, Inc.,
                            its logos, and the content of this website are the sole property of by Affordable Homes of
                            South Texas, Inc. The Services may also contain third-party trademarks, service marks,
                            graphics, and logos licensed to Affordable Homes of South Texas, Inc.by their rightful
                            owners and are protected by law. You agree not to promote any unauthorized copying, use, or
                            distribution of the Services. Except as provided herein, Affordable Homes of South Texas,
                            Inc. does not grant any express or implied right to you under any licensed copyrights,
                            trademarks, trade secrets, patents, or other proprietary rights.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Privacy.</h4>
                        <p>
                            You understand and agree that personal information provided to Affordable Homes of South
                            Texas, Inc.in connection with the Services is subject to the Affordable Homes of South
                            Texas, Inc. Privacy Policy, which is available on this website. By agreeing to these Terms
                            and Conditions you hereby agree to the Affordable Homes of South Texas, Inc. Privacy Policy,
                            which may be updated from time to time.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Termination of Service.</h4>
                        <p>
                            We may, in our sole and absolute discretion without liability to you or any third party,
                            terminate your use of one or more Services for any reason, including without limitation,
                            inactivity or violation of these Terms of Service or other policies we may establish from
                            time to time. Upon termination, we have the right to prohibit your access to the Services,
                            including without limitation by deactivating your username and password, and to refuse
                            future access to the Services by you.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Governing Law.</h4>
                        <p>
                            These Terms and Conditions shall be governed by the laws of Texas, and each party agrees to
                            submit to personal and exclusive jurisdiction of the courts located in Texas.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">
                            Changes to Terms and Conditions and Notice thereof.
                        </h4>
                        <p>
                            Affordable Homes of South Texas, Inc. has the right, in its sole discretion, to change,
                            modify, or amend any portion of these Terms and Conditions at any time by posting
                            notification here or otherwise communicating the notification to you. The changes will
                            become effective, and shall be deemed accepted by you, after the initial posting and shall
                            apply on a going-forward basis with respect to transactions initiated after the posting
                            date. In the event that you do not agree with any such modification or amendment of these
                            Terms and Conditions, your sole remedy is to terminate your use of the Services.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Links to Third Party Sites.</h4>
                        <p>
                            The Affordable Homes of South Texas, Inc. website may contain links to other web sites
                            (“Linked Sites”). The Linked Sites are not under the control of Affordable Homes of South
                            Texas, Inc. and Affordable Homes of South Texas, Inc.is not responsible for webcasting or
                            any other form of transmission received from any Linked Site. Affordable Homes of South
                            Texas, Inc.is not responsible for the content of any Linked Site. Inclusion of any Linked
                            Site on the Affordable Homes of South Texas, Inc. web site does not constitute or imply
                            any endorsement by Affordable Homes of South Texas, Inc. of the site or any association or
                            affiliation with its owner(s) or operator(s).
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">USA Patriot Act Notice.</h4>
                        <p>
                            To help the government fight the funding of terrorism and money laundering activities,
                            federal law requires all financial institutions to obtain, verify, and record information
                            that identifies each individual or business that opens an account or requests credit.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Indemnification.</h4>
                        <p>
                            You agree to indemnify, defend and hold harmless Affordable Homes of South Texas, Inc., and
                            its subsidiaries and other affiliates, and its and their directors, officers, owners,
                            agents, co-branders or other partners, employees, information providers, licensors,
                            licensees, consultants, contractors and other applicable third parties (including
                            NeighborWorks America) (collectively “Indemnified Parties”) from and against any and all
                            claims, demands, causes of action, debt or liability, including reasonable attorneys’ fees,
                            including without limitation, attorneys’ fees and costs incurred by the Indemnified Parties
                            arising out of, related to, or which may arise from:
                        </p>
                        <ol className="list-[lower-alpha] pl-8 mt-3 space-y-1">
                            <li>Your use of the Services;</li>
                            <li>Any breach or non-compliance by you of any term of these Terms and Conditions;</li>
                            <li>Any dispute or litigation caused by your actions or omissions; or</li>
                            <li>
                                Your negligence or violation or alleged violation of any applicable law or rights of a
                                third party.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Username and Password.</h4>
                        <p>You are responsible for:</p>
                        <ol className="list-decimal pl-8 mt-3 space-y-2">
                            <li>Maintaining the confidentiality of your username and password,</li>
                            <li>
                                Any and all transactions by persons that you give access to or that otherwise use such
                                username or password, and
                            </li>
                            <li>
                                Any and all consequences of use or misuse of you username and password. You agree to
                                notify us immediately of any unauthorized use of your username or password or any
                                other breach of security regarding the Services of which you have knowledge.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Disclaimer.</h4>
                        <p className="uppercase">
                            THE SERVICES, INCLUDING ALL CONTENT, SOFTWARE, FUNCTIONS, MATERIALS, AND INFORMATION MADE
                            AVAILABLE ON, PROVIDED IN CONNECTION WITH OR ACCESSIBLE THROUGH THE SERVICES, ARE PROVIDED
                            “AS IS.” TO THE FULLEST EXTENT PERMISSIBLE BY LAW, AFFORDABLE HOMES OF SOUTH TEXAS, INC.,
                            AND ITS SUBSIDIARIES AND OTHER AFFILIATES, AND THEIR AGENTS, CO-BRANDERS OR OTHER PARTNERS,
                            INCLUDING NEIGHBORWORKS AMERICA, (COLLECTIVELY THE “NWO” PARTIES) MAKE NO REPRESENTATION
                            OR WARRANTY OF ANY KIND WHATSOEVER FOR THE SERVICES OR THE CONTENT, MATERIALS, INFORMATION
                            AND FUNCTIONS MADE ACCESSIBLE BY THE SOFTWARE USED ON OR ACCESSED THROUGH THE SERVICES, OR
                            FOR ANY BREACH OF SECURITY ASSOCIATED WITH THE TRANSMISSION OF SENSITIVE INFORMATION
                            THROUGH THE SERVICES. EACH OF THE NWO PARTIES DISCLAIMS WITHOUT LIMITATION, ANY WARRANTY
                            OF ANY KIND WITH RESPECT TO THE SERVICES, NONINFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR
                            A PARTICULAR PURPOSE. THE NWO PARTIES DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE
                            SERVICES WILL BE UNINTERUPTED OR ERROR FREE. THE NWO PARTIES SHALL NOT BE RESPONSIBLE FOR
                            ANY SERVICE INTERUPTIONS, INCLUDING, BUT NOT LIMITED TO, SYSTEM FAILURES OR OTHER
                            INTERUPTIONS THAT MAY AFFECT THE RECEIPT, PROCESSING, ACCEPTANCE, COMPLETION OR SETTLEMENT
                            OF ANY TRANSACTION OR THE SERVICES.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-xl font-semibold mb-2">Limitation of Liability.</h4>
                        <p className="uppercase">
                            IN NO EVENT SHALL ANY NWO PARTY BE RESPONSIBLE OR LIABLE TO YOU OR ANY THIRD PARTY UNDER
                            ANY CIRCUMSTANCE FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL, PUNITIVE OR EXEMPLARY, DAMAGES
                            OR LOSSES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA,
                            OR OTHER INTANGIBLE LOSSES WHICH MAY BE INCURRED IN CONNECTION WITH ANY NWO PARTY OR THE
                            SERVICES, OR ANY GOODS, SERVICES, REGARDLESS OF THE TYPE OF CLAIM OR THE NATURE OF THE
                            CAUSE OF ACTION, EVEN IF THE NWO PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
                            OR LOSS. IN NO EVENT SHALL THE NWO PARTIES’ TOTAL CUMULATIVE LIABILITY ARISING FROM OR
                            RELATING TO THESE TERMS AND CONDITIONS EXCEED THE NET FEES AFFORDABLE HOMES OF SOUTH
                            TEXAS, INC. HAS ACTUALLY RECEIVED AND RETAINED FROM YOU DURING THE SIX MONTH PERIOD
                            IMMEDIATELY PRECEDING THE DATE OF THE CLAIM.
                        </p>
                        <p className="mt-4">
                            Each party acknowledges that the other party has entered into these Terms and Conditions
                            relying on the limitations of liability stated herein and that those limitations are an
                            essential basis of the bargain between the parties. In addition to and without limiting
                            any of the forgoing, no NWO party shall have any liability for any failure or delay
                            resulting from any condition beyond the reasonable control of such party, including but
                            not limited to governmental action or acts of terrorism, earthquake, fire, flood, tornado,
                            or other acts of God, labor conditions, power failures and internet disturbances.
                        </p>
                    </section>
                </div>
            </div>

            {/* CTA section */}
            <CTASection />

            {/* Contact Section */}
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
                <h4 className="text-primary font-semibold tracking-wider text-sm">
                    GET STARTED
                </h4>
                <h2 className="mt-2 text-3xl font-bold">
                    Contact Us
                </h2>
                <ContactSection />
            </div>

            {/* Carousel Section */}
            <div className="py-10">
                <ContinuousCarousel />
            </div>
        </div>
    );
}