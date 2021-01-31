import React from 'react';
import { string } from 'prop-types';
import * as parse from 'rehype-parse';
import * as unified from 'unified';
import RehypeReact from 'rehype-react';
import {
  Alert,
  Box,
  Code,
  Divider,
  Icon,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import { LinkedHeading } from './Heading';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from './Table';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props) => <LinkedHeading as="h1" size="lg" mt={8} mb={4} {...props} />,
    h2: (props) => <LinkedHeading as="h2" size="lg" mt={8} mb={4} {...props} />,
    h3: (props) => <LinkedHeading as="h3" size="md" mt={8} mb={4} {...props} />,
    h4: (props) => <LinkedHeading as="h4" size="sm" mt={8} mb={4} {...props} />,
    h5: (props) => <LinkedHeading as="h5" size="xs" mt={8} mb={4} {...props} />,
    h6: (props) => <LinkedHeading as="h6" size="xs" mt={8} mb={4} {...props} />,
    hr: (props) => <Divider borderColor="gray.400" my={4} {...props} />,
    p: (props) => <Text lineHeight="tall" my={4} {...props} />,
    ul: (props) => <List styleType="disc" my={4} spacing={3} {...props} />,
    li: (props) => <ListItem {...props} />,
    ol: (props) => (
      <List as="ol" styleType="decimal" my={4} spacing={3} {...props} />
    ),
    pre: (props) => <pre {...props} />,
    code: (props) => <Code {...props} borderWidth="1px" />,
    // eslint-disable-next-line react/prop-types
    span: ({ className, ...props }) => {
      if (className === 'code') return <Code {...props} borderWidth="1px" />;
      return <span {...props} />;
    },
    table: (props) => <Table {...props} />,
    thead: (props) => <TableHead {...props} />,
    tr: (props) => <TableRow {...props} />,
    th: (props) => <TableHeader {...props} />,
    tbody: (props) => <TableBody {...props} />,
    td: (props) => <TableCell {...props} />,
    // eslint-disable-next-line react/prop-types
    a: ({ href, children, ...props }) => {
      // eslint-disable-next-line react/prop-types
      if (href && href.startsWith('http')) {
        return (
          <Link
            href={href}
            color="primary.500"
            overflowWrap="anywhere"
            isExternal
            {...props}
          >
            {children}
            <Icon name="external-link" mx={2} mb={1} />
          </Link>
        );
      }
      return (
        <Link
          href={href}
          color="primary.500"
          overflowWrap="anywhere"
          {...props}
        >
          {children}
        </Link>
      );
    },
    img: (props) => <Box as="img" rounded="sm" {...props} />,
    figure: (props) => <Box as="figure" textAlign="center" my={8} {...props} />,
    figcaption: (props) => (
      <Text as="figcaption" fontSize="sm" color="gray.500" mt={4} {...props} />
    ),
    blockquote: (props) => (
      <Alert
        my={4}
        px={4}
        py={0}
        status="info"
        variant="left-accent"
        flexDirection="column"
        alignItems="flex-start"
        {...props}
      />
    ),
  },
}).Compiler;

const Content = ({ html, ...props }) => {
  const process = unified().use(parse, { fragment: true });
  const htmlAst = process.parse(html);

  return (
    <Box {...props}>
      <Global
        styles={css`
          pre {
            padding: 1rem;
            border-width: 1px;
            border-radius: 4px;
            white-space: pre-wrap;
            word-break: break-all;
            overflow: auto;
          }
        `}
      />
      {renderAst(htmlAst)}
    </Box>
  );
};

Content.propTypes = {
  html: string.isRequired,
};

export default Content;
