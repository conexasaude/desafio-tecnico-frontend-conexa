import { Meta } from "@storybook/react";
import { DefaultInput } from "../components/DefaultInput";

interface DefaultInputProps {
  title: string;
  type: string;
}

const argsDisabled = {
  registerName: {
    table: {
      disable: true,
    },
  },
  formRegister: {
    table: {
      disable: true,
    },
  },
  errors: {
    table: {
      disable: true,
    },
  },
  reactRef: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  tooltipText: {
    table: {
      disable: true,
    },
  },
  mode: {
    table: {
      disable: true,
    },
  },
  reValidateMode: {
    table: {
      disable: true,
    },
  },
  defaultValues: {
    table: {
      disable: true,
    },
  },
  values: {
    table: {
      disable: true,
    },
  },
  resetOptions: {
    table: {
      disable: true,
    },
  },
  resolver: {
    table: {
      disable: true,
    },
  },
  context: {
    table: {
      disable: true,
    },
  },
  criteriaMode: {
    table: {
      disable: true,
    },
  },
  shouldUnregister: {
    table: {
      disable: true,
    },
  },
  shouldUseNativeValidation: {
    table: {
      disable: true,
    },
  },
  delayError: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: "Components/Default Input",
  component: DefaultInput,
  argTypes: argsDisabled,
} as Meta;

export const Default = ({ title, type }: DefaultInputProps) => {
  return <DefaultInput title={title} type={type} />;
};

Default.args = {
  title: "Test",
  type: "text",
};
