import React from 'react';
import Link from 'gatsby-link';

const PeopleListing = ({ item }) => (
    <div>
        <h3>
            {item.frontmatter.title}
        </h3>
    </div>
)

export default PeopleListing