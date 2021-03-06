import HomeSection from '@/components/home/HomeSection'
import { ChipIcon } from '@heroicons/react/outline'
import React, { useCallback, useMemo, useState } from 'react'
import Window from '@/components/Window'
import {
  ISelectableItem,
  SelectableList,
} from '@/components/home/SelectableList'
import { ScikitLearnIcon, TensorFlowIcon } from '@/components/icons'
import CodeBlock from '@/components/CodeBlock'
import { Sample } from '@/lib/samples'
import FlamaName from '@/components/FlamaName'

const frameworks: ISelectableItem[] = [
  {
    id: 'tf',
    name: 'TensorFlow',
    icon: <TensorFlowIcon fillOpacity=".8" />,
  },
  {
    id: 'sklearn',
    name: 'scikit-learn',
    icon: <ScikitLearnIcon fillOpacity=".8" />,
  },
]

interface MachineLearningResponsiveProps {
  samples: Sample[]
}

export default function MachineLearningResponsive({
  samples,
}: MachineLearningResponsiveProps) {
  const [selected, setSelected] = useState<string>(frameworks[0].id)

  const onSelect = useCallback(
    (id: string) => {
      setSelected(id)
    },
    [setSelected]
  )

  const selectedSample = useMemo(
    () => samples.find(({ id }) => id === selected),
    [selected, samples]
  )

  return (
    <HomeSection
      id="machine-learning-responsive"
      icon={<ChipIcon />}
      title="Machine Learning Responsive"
      docRef="/docs/"
      selectableList={
        <SelectableList
          items={frameworks.map(({ id, name, icon }) => ({ id, name, icon }))}
          selected={selected}
          onSelect={onSelect}
        />
      }
      content={
        <>
          <p>
            Let’s face it, there isn’t a single ML framework. Models developed
            in such different frameworks should be easily integrated together in
            a single API. However this integration presents a technical
            challenge, typically unproductive and annoying for a data scientist.
          </p>
          <br />
          <p>
            <FlamaName /> is thought from the very beginning to be compatible
            with the mainstream data-science frameworks, and it makes easy and
            simple the packaging of ML models to be integrated together.
          </p>
        </>
      }
    >
      <div className="ml-auto -mt-16 w-full max-w-3xl">
        {selectedSample && (
          <Window title={selectedSample.title}>
            <div className="">
              <CodeBlock
                code={selectedSample.code}
                language={selectedSample.language}
                lineNumbers={selectedSample.lineNumbers}
              />
            </div>
          </Window>
        )}
      </div>
    </HomeSection>
  )
}
