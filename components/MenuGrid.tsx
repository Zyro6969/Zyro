import React, { useState } from 'react';
import { FoodItem } from '../types';
import { CATEGORIES } from '../constants';
import { Plus, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface MenuGridProps {
  items: FoodItem[];
  onAddToCart: (item: FoodItem) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<FoodItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="menu">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-dark text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white font-bold text-lg">${item.price.toFixed(2)}</span>
              </div>
              <button 
                 onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItemForDetails(item);
                 }}
                 className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-gray-700 hover:text-primary hover:bg-white transition-colors"
                 title="View Nutrition"
              >
                <Info size={18} />
              </button>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{item.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                 <span className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors active:scale-95 transform"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nutrition Modal */}
      {selectedItemForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fade-in relative">
            <button 
                onClick={() => setSelectedItemForDetails(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
                ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItemForDetails.name}</h3>
            <p className="text-gray-600 mb-4">{selectedItemForDetails.description}</p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 text-center">Nutritional Breakdown</h4>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[
                                    { name: 'Protein', value: selectedItemForDetails.macros.protein },
                                    { name: 'Carbs', value: selectedItemForDetails.macros.carbs },
                                    { name: 'Fat', value: selectedItemForDetails.macros.fat },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={70}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {COLORS.map((color, index) => (
                                    <Cell key={`cell-${index}`} fill={color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 text-sm mt-2">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#0088FE]"></div> Protein ({selectedItemForDetails.macros.protein}g)</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#00C49F]"></div> Carbs ({selectedItemForDetails.macros.carbs}g)</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#FFBB28]"></div> Fat ({selectedItemForDetails.macros.fat}g)</div>
                </div>
                <p className="text-center mt-4 text-sm font-medium text-gray-500">Total Calories: {selectedItemForDetails.calories}</p>
            </div>
            
            <button
                onClick={() => {
                    onAddToCart(selectedItemForDetails);
                    setSelectedItemForDetails(null);
                }}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl transition-colors"
            >
                Add to Order - ${selectedItemForDetails.price.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
