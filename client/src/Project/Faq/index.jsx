import React, { useState } from 'react';

import { Icon } from 'shared/components';

import faqCategories from './faqData';
import {
  FaqCont,
  FaqContent,
  FaqHeading,
  FaqIntro,
  CategorySection,
  CategoryTitle,
  FaqItem,
  QuestionButton,
  QuestionIcon,
  Answer,
} from './Styles';

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, itemIndex) => {
    setOpenItems(current => ({
      ...current,
      [categoryIndex]: current[categoryIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <FaqCont>
      <FaqContent>
        <FaqHeading>Help &amp; FAQ</FaqHeading>
        <FaqIntro>
          Answers to common questions about boards, issues, search, and project settings.
        </FaqIntro>

        {faqCategories.map((category, categoryIndex) => (
          <CategorySection key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>
            {category.items.map((item, itemIndex) => {
              const isOpen = openItems[categoryIndex] === itemIndex;
              return (
                <FaqItem key={item.question}>
                  <QuestionButton
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(categoryIndex, itemIndex)}
                  >
                    {item.question}
                    <QuestionIcon isOpen={isOpen}>
                      <Icon type="chevron-down" size={18} />
                    </QuestionIcon>
                  </QuestionButton>
                  {isOpen && <Answer>{item.answer}</Answer>}
                </FaqItem>
              );
            })}
          </CategorySection>
        ))}
      </FaqContent>
    </FaqCont>
  );
};

export default Faq;
