import { motion } from 'framer-motion';
import { classNames } from '../../../../utils/helpers';
import { ToolCategoryProps, toolsVariants } from './types';
import { ToolGrid } from './ToolGrid';

export const ToolCategory: React.FC<ToolCategoryProps> = ({
  category,
  className
}) => {
  return (
    <motion.div
      variants={toolsVariants}
      className={classNames('space-y-4', className)}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {category.name}
      </h3>
      <ToolGrid tools={category.tools} />
    </motion.div>
  );
};

ToolCategory.displayName = 'ToolCategory';

export default ToolCategory;