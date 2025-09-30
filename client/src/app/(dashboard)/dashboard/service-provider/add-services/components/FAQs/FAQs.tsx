'use client';
import React, { useState } from 'react'
import styles from '../../page.module.css'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput'
import CustomTextarea from '@/app/components/common/FormComponents/CustomTextarea/CustomTextarea'
import Button from '@/app/components/common/Button/Button'
import CloseIcon from '@/assets/icons/CloseIcon';
import Modal from '@/app/components/common/Modal/Modal';
import PreviewContainer from '../PreviewContainer/PreviewContainer';
interface FAQType {
  question: string,
  answer: string
}
const FAQs = () => {
  const [faqs, setFaqs] = useState<FAQType[]>([{ question: '', answer: '' }]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const addFaq = () => {
    const lastFaq = faqs[faqs.length - 1];
    if (lastFaq.question.trim() && lastFaq.answer.trim()) {
      setFaqs([...faqs, { question: '', answer: '' }])
    }
  }
  const deleteFaq = (index: number) => {
    const filteredFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(filteredFaqs)
  }
  const handleChange = (index: number, field: 'question' | 'answer', value: string) => {
    const updatedFAQs = [...faqs];
    updatedFAQs[index][field] = value;
    setFaqs(updatedFAQs)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>FAQs (Optional)</div>
        <div className={styles.content}>
          <div className="subTitle">Add frequently asked questions about your service</div>
          <div className={styles.faqs}>
            {faqs.map((item, index) => {
              return <div key={index} className={styles.faq}>
                <CustomInput
                  label='Question'
                  placeholder='FAQ Question'
                  value={item.question}
                  onChange={(e) => handleChange(index, 'question', e.target.value)}
                />
                <CustomTextarea
                  label='Answer'
                  placeholder='FAQ Answer'
                  value={item.answer}
                  onChange={(e) => handleChange(index, 'answer', e.target.value)}
                />
                {faqs.length > 1 && <button onClick={() => deleteFaq(index)} className={styles.deleteFaq}><CloseIcon width={10} height={10} /></button>}
              </div>
            })}
            <Button onClick={addFaq} style='grey' buttonText='Add FAQ' />
            <div className={styles.actions}>
              <Button onClick={() => setIsPreviewOpen(true)} style='greyFill' buttonText='See Preview' />
              <Button style='greyFill' buttonText='Save as Draft' />
              <Button style='skyblue' buttonText='Publish Service' />
              <Button width='auto' style='grey' buttonText='Back' />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
        <PreviewContainer />
      </Modal>
    </>

  )
}

export default FAQs