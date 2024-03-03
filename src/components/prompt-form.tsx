'use client';

import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import { Button } from './ui/button';
import { IconArrowElbow } from './ui/icons';

export function PromptForm({ onNewQuestion }: any) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim()) {
      onNewQuestion(input);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='relative flex flex-col w-full pr-8 overflow-hidden max-h-60 grow bg-slate-600 sm:rounded-md sm:border sm:pr-12'>
        <Textarea
          //   ref={inputRef}
          tabIndex={0}
          //   onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Send a message.'
          spellCheck={false}
          className='min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm text-white placeholder:text-slate-200'
        />
        <div className='absolute right-0 top-4 sm:right-4'>
          <Button type='submit' size='icon'>
            <IconArrowElbow />
            <span className='sr-only'>Send message</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
