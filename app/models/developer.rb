class Developer < ApplicationRecord
	acts_as_taggable_on :skills
end
