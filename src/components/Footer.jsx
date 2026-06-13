export default function Footer() {
  const footerNavigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: 'License', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0B132B] font-sans" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md gap-x-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 rounded-md border-0 bg-[#1C2541] px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#2D3D6D] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5053C4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-[#1C2541] pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-400 order-last sm:order-first">
            &copy; 2026 Your Company, Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.339.06 2.125.27 2.61.458a4.861 4.861 0 011.665 1.083 4.86 4.86 0 011.083 1.665c.188.485.4 1.27.46 2.61.043.926.054 1.281.054 3.71s-.01 2.784-.054 3.71c-.06 1.339-.27 2.125-.458 2.61a4.86 4.86 0 01-1.083 1.665 4.866 4.866 0 01-1.665 1.083c-.485.188-1.27.4-2.61.46-.927.043-1.281.054-3.71.054s-2.784-.01-3.71-.054c-1.339-.06-2.125-.27-2.61-.458a4.86 4.86 0 01-1.665-1.083 4.861 4.861 0 01-1.083-1.665c-.188-.485-.4-1.27-.46-2.61C2.01 14.814 2 14.459 2 12.315s.01-2.784.054-3.71c.06-1.339.27-2.125.458-2.61a4.861 4.861 0 011.083-1.665 4.86 4.86 0 011.665-1.083c.485-.188 1.27-.4 2.61-.46.926-.043 1.281-.054 3.71-.054zm-1.155 2c-2.43 0-2.784.01-3.71.054-.134.006-.23.014-.302.018-.847.04-1.28.18-1.54.28a3.09 3.09 0 00-1.117.727 3.09 3.09 0 00-.727 1.118c-.1.26-.24.693-.28 1.54-.004.072-.012.168-.018.302-.043.926-.054 1.281-.054 3.71s.01 2.784.054 3.71c.006.134.014.23.018.302.04.846.18 1.28.28 1.54.1.26.25.49.443.684.194.193.424.343.684.443.26.1.693.24 1.54.28.072.004.168.012.302.018.926.043 1.281.054 3.71.054s2.784-.01 3.71-.054c.134-.006.23-.014.302-.018.846-.04 1.28-.18 1.54-.28a3.09 3.09 0 001.118-.727 3.09 3.09 0 00.727-1.118c.1-.26.24-.693.28-1.54.004-.072.012-.168.018-.302.043-.926.054-1.281.054-3.71s-.01-2.784-.054-3.71c-.006-.134-.014-.23-.018-.302-.04-.846-.18-1.28-.28-1.54a3.09 3.09 0 00-.727-1.117 3.09 3.09 0 00-1.118-.727c-.26-.1-.693-.24-1.54-.28-.072-.004-.168-.012-.302-.018-.926-.043-1.281-.054-3.71-.054zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.6823 10.6218L20.2391 3H18.6854L13.0116 9.59399L8.44126 3H3L9.87659 13.0074L3 21H4.55384L10.5473 14.0352L15.3436 21H20.7848L13.682 10.6218H13.6823ZM11.3361 13.1183L10.6397 12.1223L5.11361 4.21857H7.5003L11.9542 10.5891L12.6506 11.5851L18.4256 19.8466H16.0389L11.3361 13.1187V13.1183Z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.0 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C22 8.68 22 12 22 12s0 3.32-.42 4.814a2.479 2.479 0 01-1.768 1.768C18.32 19 12 19 12 19s-6.32 0-7.814-.418a2.479 2.479 0 01-1.768-1.768C2 15.32 2 12 2 12s0-3.32.418-4.814a2.479 2.479 0 011.768-1.768C5.68 5 12 5 12 5s6.32 0 7.812.418zM9.75 15.022L15.5 12 9.75 8.978v6.044z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}