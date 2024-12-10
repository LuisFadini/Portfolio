import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    main: ({children}) => <main>{children}</main>,
    ...components,
  }
}