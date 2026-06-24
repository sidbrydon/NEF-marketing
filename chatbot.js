// Andrew Brydon AI Chatbot - Offline Knowledge Base
// Answers questions as Andrew about NEF and his career

const knowledgeBase = [
    {
        keywords: ['what', 'nef', 'engineering foundation', 'what is'],
        response: "NEF stands for the NAB Engineering Foundation. It's a standardised engineering capability I created at NAB starting in early 2020. Think of it as a pre-integrated development platform that gives every team a consistent, secure, and compliant way to build and deploy software. It was born from the need to solve the complexity that emerged as hundreds of squads were all building the same cloud components in slightly different ways."
    },
    {
        keywords: ['why', 'create', 'built', 'reason', 'motivation', 'purpose'],
        response: "We built NEF because after NAB's rapid cloud adoption — we were an early AWS mover in 2014 — teams were individually building the same components in slightly different ways. Every team was a snowflake. Onboarding was hard, movement between teams was painful, and in a heavily regulated bank, compliance was being handled inconsistently. We needed to slow down to go faster."
    },
    {
        keywords: ['pillar', 'three', 'components', 'parts', 'structure'],
        response: "NEF is built on three pillars. First: Remove Friction — automated onboarding, standard tools, Mac-first development, Docker on laptops. The goal was making every frustration point invisible. Second: Standard Platform — a pre-integrated development platform with security and compliance built in, released weekly. Third: Innersource — an open-source culture inside the org with champions in every team and decentralised contribution."
    },
    {
        keywords: ['terraform', 'tfe', 'infrastructure', 'iac', 'hashicorp'],
        response: "Terraform Enterprise is a first-class citizen in how we manage and implement NEF. We use it to standardise the modules that support all of our infrastructure deployment across multi-cloud — both AWS and Azure. It gives us that central reporting capability around what's happening at the infrastructure layer, and provides evidence points back to our audit team. I've been working with the HashiCorp toolset for many years — it's industry standard."
    },
    {
        keywords: ['jenkins', 'jte', 'ci', 'cd', 'pipeline', 'cicd'],
        response: "We use the Jenkins Templating Engine — JTE — to provide a reusable, standard CI/CD pipeline. One template, hundreds of teams. This was critical because before NEF, every team had built their own pipeline in slightly different ways. Standardising this meant teams could focus on their code rather than wrestling with deployment infrastructure."
    },
    {
        keywords: ['compliance', 'security', 'audit', 'regulation', 'sentinel', 'policy'],
        response: "In a heavily regulated organisation like NAB, compliance is non-negotiable. What we did with NEF is make security invisible — teams don't spend effort on compliance, they GET it for free. We use Sentinel for policy as code, which gives us automated guardrails. TFE hooks into ServiceNow and provides a clear chain of evidence between changes raised and deployed. Our compliance team went from being worried to being our biggest champions."
    },
    {
        keywords: ['innersource', 'open source', 'contribution', 'champion'],
        response: "Innersource is our third pillar and it's what prevents the platform from becoming a bottleneck. We use an open source approach within the organisation — any team can contribute updates into the central capability. We created champions in each delivery team who can approve and peer review pull requests to the GitHub organisation. It's a fully decentralised model. GitHub refers to this as innersourcing, and it's absolutely key to scaling anything in modern software development."
    },
    {
        keywords: ['day one', 'first day', 'onboarding', 'new developer', 'join'],
        response: "Our north star is simple: every engineer deploys production-ready code on Day One. Not weeks, not months — their first day. We achieve this through automated onboarding to all the tools they need, a standard platform that's already there as code, and pre-integrated security. A new developer can complete a pull request from GitHub and build on top of the platform immediately. Weeks or months of platform enablement are avoided."
    },
    {
        keywords: ['challenge', 'difficult', 'hard', 'resist', 'pushback', 'obstacle'],
        response: "The biggest challenge was cultural. We were asking teams to give up their bespoke approaches and adopt standardisation. Some teams loved their custom setups. The key was the champions model — peer influence is far more effective than top-down mandates. We also had to fight the perception that standardisation means losing autonomy. Our philosophy is 'autonomy WITH alignment' — teams still own their destiny, they just do it on a foundation that keeps everyone safe and productive."
    },
    {
        keywords: ['how long', 'time', 'duration', 'timeline', 'months'],
        response: "It was about 9 months from inception to the first version of NEF being broadly available. But I want to be clear — it's not a project, it's a product. We release weekly. It continuously evolves. The initial build phase was intense, but the ongoing improvement through innersource means it gets better with every team that uses it and contributes back."
    },
    {
        keywords: ['team', 'size', 'people', 'budget', 'resource', 'staff', 'how many'],
        response: "At its height, I had approximately 300 professionals under my direct management working on this capability. It was a substantial budget and investment. But the ROI was clear — when you multiply developer productivity gains across hundreds of squads, the numbers speak for themselves. Every team that adopts the platform saves weeks of setup time, and compliance improvements protect the entire organisation."
    },
    {
        keywords: ['measure', 'success', 'metric', 'kpi', 'outcome', 'result'],
        response: "We measured success in several ways. First, time to first deploy for new engineers — getting that towards Day One. Second, adoption rates across squads. Third, compliance posture — are teams consistently meeting our regulatory obligations without manual effort? And fourth, the velocity of feature delivery to customers. The Spotify philosophy resonated with us: if you focus on velocity, quality is a fast follower. But only if you have the foundations right."
    },
    {
        keywords: ['spotify', 'velocity', 'quality', 'fast'],
        response: "There's a great quote from Spotify's engineering philosophy: 'If you focus on velocity, then quality is a fast follower.' This deeply resonated with our approach. NEF is fundamentally about removing everything that slows engineers down, while ensuring quality and compliance come along automatically. You don't sacrifice quality for speed — you build foundations that make both possible simultaneously."
    },
    {
        keywords: ['cloud', 'aws', 'azure', 'multi-cloud', 'migration'],
        response: "NAB was a first mover into AWS around 2014. By the time we started NEF, we had a mature multi-cloud strategy across AWS and Azure. The approach we took with going to cloud was absolutely a great way for us to learn. Teams were set free to move rapidly. But that freedom created inconsistency. NEF was about taking all those learnings and codifying them into a standard approach that works across both cloud providers through Terraform."
    },
    {
        keywords: ['career', 'background', 'experience', 'history', 'previous', 'before nab'],
        response: "I have nearly 25 years of experience in technology across finance, telecommunications, datacentres, and online startups. Before NAB, I was VP of Consulting at Contino — an enterprise DevOps and cloud transformation consultancy. Before that, I was CTO of Cloud at Telstra. I've also held senior positions at Deloitte. This breadth of experience across different industries gave me a unique perspective on what standardisation needs to look like at enterprise scale."
    },
    {
        keywords: ['contino', 'consulting', 'devops'],
        response: "At Contino, I was VP of Consulting. It's an enterprise DevOps and cloud transformation consultancy. Working with multiple large organisations taught me the patterns that work and don't work when transforming engineering culture. I brought those learnings directly into NAB. Seeing the same problems across different companies made me confident that standardisation, when done right, is transformative."
    },
    {
        keywords: ['telstra', 'cto', 'telecom'],
        response: "I was CTO of Cloud at Telstra from 2013 to 2016. Telstra is Australia's largest telecommunications company. Leading cloud strategy there taught me how to operate at massive scale in a regulated environment. The experience of building cloud capability for a telco with millions of customers directly informed how I approached the challenge at NAB."
    },
    {
        keywords: ['advice', 'recommend', 'tip', 'suggestion', 'start', 'begin'],
        response: "My top advice? First, let teams run and feel the pain of inconsistency before trying to standardise — you need that learning phase. Second, treat your platform as a product, not a project — weekly releases, a roadmap, and teams are your customers. Third, make compliance invisible — don't ask developers to do security work, do it FOR them automatically. And fourth, decentralise to scale — innersource prevents your platform team from becoming a bottleneck."
    },
    {
        keywords: ['lesson', 'learn', 'mistake', 'differently', 'hindsight'],
        response: "The biggest lesson: you need to slow down to go faster. It sounds counterintuitive, but investing in standardisation pays compound returns. Also, I learned that building the technology is maybe 30% of the job — the other 70% is cultural change. Bootcamps, champions, showing teams the value rather than mandating adoption. If I could do one thing differently, I'd have invested even more in communication and evangelism from day one."
    },
    {
        keywords: ['bootcamp', 'training', 'education', 'learn', 'upskill'],
        response: "We ran a series of bootcamps internally to train up our engineers to work in this standard approach. This was critical — you can't just build a platform and hope people will come. The bootcamps covered everything from Terraform modules to the innersource contribution model. We also created champions in each team who became the local experts and could help their colleagues adopt the new way of working."
    },
    {
        keywords: ['platform', 'product', 'weekly', 'release'],
        response: "We built NEF as a product, not a project. Projects end. Products evolve. We release weekly — that cadence keeps us accountable and means teams inherit new features and security improvements every time they deploy. By building it as a product and releasing it regularly, teams get more and more layers of protection for the customer with every single deployment. It's compounding value."
    },
    {
        keywords: ['docker', 'container', 'serverless', 'mac', 'laptop'],
        response: "Part of removing friction was embracing things that had previously been seen as security threats. We moved to Mac-first development and supported Docker for development on local laptops. We built the platform on top of a secured container and serverless capability. These changes were initially controversial in a bank, but the productivity gains were enormous and we proved security could be maintained through proper controls."
    },
    {
        keywords: ['language', 'programming', 'standard', 'constrain'],
        response: "We narrowed the list of software languages used in the environment. Every successful software company uses a constrained set of programming languages, and at NAB we're no different. Each language is designed to support a specific area of our technical delivery. This supports the standard platform — when you have standard languages, teams can move between projects more easily, and the platform can provide deeper tooling support for each language."
    },
    {
        keywords: ['scale', 'hundreds', 'squads', 'large', 'enterprise', 'big'],
        response: "NAB has hundreds of development squads. The challenge of operating at that scale is exactly why NEF exists. When you have that many teams, inconsistency creates exponential complexity. But standardisation at scale also requires a decentralised model — you can't have a central team reviewing every change. That's why innersource with champions in each delivery team was essential. It scales because everyone owns it."
    },
    {
        keywords: ['buy-in', 'leadership', 'executive', 'support', 'convince', 'stakeholder'],
        response: "Getting leadership buy-in was about framing the problem in terms they care about: risk and speed. We showed that inconsistent compliance approaches created risk, and that duplicated effort across hundreds of teams was wasting millions in productivity. The pitch was simple — invest in a foundation that reduces risk AND accelerates delivery. When you can frame it as not being a tradeoff, executives get excited."
    },
    {
        keywords: ['culture', 'change', 'transformation', 'mindset'],
        response: "Building the technology was maybe 30% of the work. Cultural change was the other 70%. Engineers had built their own ways of working and were proud of them. We couldn't just mandate adoption — we had to show value. The champions model was our secret weapon: engineers trust their peers more than directives from above. When a respected engineer in your team says 'this is better', people listen."
    },
    {
        keywords: ['different', 'unique', 'special', 'distinguish', 'stand out'],
        response: "What made NEF different from typical platform initiatives was three things. One: we didn't try to standardise too early — we let teams feel the pain first. Two: we treated it as a product with weekly releases, not a one-off project. Three: the innersource model meant it was genuinely owned by everyone, not just a central team. Most platform teams become bottlenecks. We designed from day one to avoid that."
    },
    {
        keywords: ['future', 'next', 'roadmap', 'vision', 'where'],
        response: "After leading NEF, I went on to become Executive Chief Engineer and then Executive Enterprise Engineering at NAB, scaling these principles further. I'm now CTO for ANZ at HashiCorp, helping some of the region's most influential enterprises adopt the same patterns. The principles of NEF — platforms not pipelines, abstractions not toil, autonomy with alignment — apply universally. Every organisation struggling with developer productivity can benefit from this approach."
    },
    {
        keywords: ['hashicorp', 'current', 'now', 'today', 'role'],
        response: "I'm currently the CTO for ANZ at HashiCorp. I help some of the region's most influential enterprises, financial institutions, and government agencies modernise their infrastructure and security through cloud-native operating models. It's a natural extension of what I built at NAB — now I help other organisations achieve similar transformations using the HashiCorp stack."
    },
    {
        keywords: ['github', 'repository', 'code', 'version control', 'git'],
        response: "GitHub is central to how NEF works. The standard development platform allows developers to complete a pull request from GitHub and build on top of the platform immediately. We use curated GitHub organisations for the innersource model — teams can contribute to the platform with changes reviewed by champions in delivery teams. It's a fully decentralised model built on GitHub's collaboration features."
    },
    {
        keywords: ['servicenow', 'change', 'itil', 'evidence'],
        response: "TFE hooks directly into ServiceNow, which provides a clear chain of evidence between the change being raised in our organisation and what actually gets deployed. This is critical for audit and compliance. Our auditors can trace from a business change request all the way through to the infrastructure that was provisioned. It's automated evidence generation — no manual work required from development teams."
    },
    {
        keywords: ['slow down', 'faster', 'paradox', 'invest'],
        response: "This is probably my favourite expression from the NEF journey: 'You need to slow down to go faster.' After the rapid cloud adoption phase, it felt counterintuitive to invest months in standardisation. Teams wanted to keep shipping. But the compound effect is massive — once you have the foundation, every new team, every new project starts from a position of strength rather than rebuilding from scratch. The acceleration is exponential."
    },
    {
        keywords: ['autonomous', 'autonomy', 'freedom', 'control', 'alignment'],
        response: "Our philosophy is 'autonomy WITH alignment.' Teams still own their destiny — they choose what to build, how to architect their services, which patterns to follow within their domain. But they do it on a foundation that keeps everyone safe, compliant, and productive. It's not about removing freedom — it's about removing undifferentiated heavy lifting so teams can focus their autonomy on what actually matters: customer value."
    },
    {
        keywords: ['hello', 'hi', 'hey', 'g\'day', 'gday'],
        response: "G'day! Great to chat. I'm Andrew Brydon — Distinguished Engineer at NAB, now CTO ANZ at HashiCorp. Happy to talk about the NAB Engineering Foundation, my career journey, or engineering leadership. What would you like to know?"
    },
    {
        keywords: ['thank', 'thanks', 'cheers', 'appreciate'],
        response: "Cheers! Happy to help. If you've got more questions about NEF, engineering transformation, or anything else, feel free to ask. That's what I'm here for."
    },
    {
        keywords: ['who', 'are you', 'about you', 'introduce'],
        response: "I'm Andrew Brydon. I've spent nearly 25 years in technology — CTO of Cloud at Telstra, VP of Consulting at Contino, Distinguished Engineer at NAB, and now CTO for ANZ at HashiCorp. My focus has always been on how large organisations can modernise their engineering practices to move faster without sacrificing quality or compliance. At NAB, I led the creation of the Engineering Foundation that transformed how 7,000+ engineers deliver."
    },
    {
        keywords: ['abstract', 'toil', 'platform not pipeline'],
        response: "Three phrases that encapsulate my engineering philosophy: Platforms, not pipelines — build products your teams use, not one-time automations. Abstractions, not toil — engineers shouldn't wrestle with infrastructure, they should describe what they want. Autonomy with alignment — teams own their destiny but on a foundation that keeps everyone safe. These principles guided everything we built with NEF."
    },
    {
        keywords: ['bank', 'finance', 'financial', 'regulated'],
        response: "Working in a bank adds a unique dimension. Everything has compliance implications. Every deployment needs an audit trail. Every infrastructure change needs evidence. What NEF did was flip this from being a burden to being a feature. Instead of teams spending weeks on compliance, they get it automatically. Instead of auditors chasing evidence, it's generated as a byproduct of deployment. Security becomes invisible — in the best possible way."
    },
    {
        keywords: ['ddd', 'talk', 'speaking', 'conference', 'hashiconf', 'presentation'],
        response: "I've spoken at HashiConf 2020 about building NAB Engineering Foundations with Terraform Enterprise, and at DDD By Night and various financial services summits. I enjoy sharing what we've learned because these problems aren't unique to NAB — every large organisation faces the same challenge of scaling engineering while maintaining quality. If my experience helps someone else avoid the pitfalls, that's a win."
    }
];

// Fallback responses when no match is found
const fallbackResponses = [
    "That's an interesting question. While I might not have a specific answer for that, I can tell you about how we built NEF, the technology stack, our challenges, or lessons learned. What would be most useful?",
    "Good question! I'm best at talking about the NAB Engineering Foundation — the why, the how, and the lessons. Try asking about our three pillars, the tech stack, or how we managed cultural change.",
    "I appreciate the question. My expertise is really around engineering transformation at scale — standardisation, platform engineering, innersource, and compliance as code. Want me to dig into any of those areas?",
    "Hmm, that's outside my core area. But I'm happy to chat about engineering leadership, cloud transformation, developer experience, or how we scaled NEF across hundreds of squads. What interests you?"
];

// Calculate match score for a question
function getMatchScore(input, entry) {
    const lower = input.toLowerCase();
    let score = 0;
    let matchedKeywords = 0;
    
    for (const keyword of entry.keywords) {
        if (lower.includes(keyword.toLowerCase())) {
            matchedKeywords++;
            // Longer keyword matches are more valuable
            score += keyword.length;
        }
    }
    
    // Require at least one keyword match
    if (matchedKeywords === 0) return 0;
    
    // Bonus for multiple keyword matches
    score += matchedKeywords * 5;
    
    return score;
}

// Find best response
function findResponse(input) {
    let bestScore = 0;
    let bestResponse = null;
    
    for (const entry of knowledgeBase) {
        const score = getMatchScore(input, entry);
        if (score > bestScore) {
            bestScore = score;
            bestResponse = entry.response;
        }
    }
    
    if (bestScore >= 3) {
        return bestResponse;
    }
    
    // Return a random fallback
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Chat functionality
let chatOpen = false;

function toggleChat() {
    chatOpen = !chatOpen;
    const panel = document.getElementById('chatPanel');
    const toggle = document.getElementById('chatToggle');
    panel.classList.toggle('open', chatOpen);
    toggle.classList.toggle('active', chatOpen);
    
    if (chatOpen) {
        setTimeout(() => {
            document.getElementById('chatInput').focus();
        }, 300);
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerHTML = `<div class="message-content">${escapeHtml(message)}</div>`;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    
    // Show typing indicator
    const typingMsg = document.createElement('div');
    typingMsg.className = 'chat-message bot';
    typingMsg.id = 'typing-indicator';
    typingMsg.innerHTML = `<div class="message-content"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
    messagesContainer.appendChild(typingMsg);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate thinking delay (500-1500ms for natural feel)
    const delay = 600 + Math.random() * 900;
    setTimeout(() => {
        // Remove typing indicator
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
        
        // Get and display response
        const response = findResponse(message);
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = `<div class="message-content">${response}</div>`;
        messagesContainer.appendChild(botMsg);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, delay);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Prevent keyboard shortcuts from triggering when typing in chat
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            e.stopPropagation();
        });
    }
});
